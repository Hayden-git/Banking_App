import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
	const loggedIn = await getLoggedInUser();

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.name || "Guest"}
						subtext="Access and manage your financials in one place"
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={[1]}
						totalCurrentBalance={1250.25}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 623.5 }]}
			/>
		</section>
	);
};

export default Home;
