import React from "react";
// import { Button } from "../../components/ui/button";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";

const Home = () => {
	const loggedIn = { firstName: "Hayden", lastName: "Garry", email: "asdf@gmail.com" };

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
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
