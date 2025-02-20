
# 🏦 Banking App  

A modern, secure, and mobile-responsive banking app built with **TypeScript, React, Next.js, and ShadCN**. This app allows users to **view transactions, add bank accounts, send funds, and authenticate payments** seamlessly using **Plaid API** and **Dwolla API**. The backend is powered by **Appwrite**, a real-time database and authentication platform.  

## 🚀 Features  

✅ **View Transactions** – Users can see their transaction history, including amounts, categories, and payment statuses.  
✅ **Add Bank Accounts** – Connect checking or savings accounts securely using **Plaid API**.  
✅ **Transaction Authentication** – Securely authenticate payments and transactions via **Plaid** and **Dwolla**.  
✅ **Send Funds** – Transfer money safely between users with **Dwolla API**.  
✅ **Copy Transaction IDs** – Easily copy and share transaction identifiers.  
✅ **Mobile Responsive** – Fully optimized for mobile and desktop usage.  

## 🖥️ Screenshots  

Here are some screenshots of the app:  

![Dashboard](./screenshots/dashboard.png)  
![Transaction History](./screenshots/transactions.png)  
![Bank Accounts](./screenshots/bank-accounts.png)  
![Mobile Responsive Design] <img width="440" alt="image" src="https://github.com/user-attachments/assets/72c7e40f-e17e-4aaa-a783-ebb336f4d1fd" />



## 🛠️ Tech Stack  

- **Frontend**: React, Next.js, TypeScript, ShadCN (for UI components)  
- **Backend**: Appwrite (real-time database and authentication)  
- **APIs**: Plaid API, Dwolla API (for payment processing and authentication)  
- **Styling**: TailwindCSS  

## 📦 Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/banking-app.git
   cd banking-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables** (Create a `.env.local` file in the root directory)  
   ```bash
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_PLAID_CLIENT_ID=your-plaid-client-id
   NEXT_PUBLIC_PLAID_SECRET=your-plaid-secret
   NEXT_PUBLIC_DWOLLA_KEY=your-dwolla-key
   NEXT_PUBLIC_DWOLLA_SECRET=your-dwolla-secret
   ```

4. **Run the development server**  
   ```bash
   npm run dev
   ```

5. **Open in browser**  
   Go to [http://localhost:3000](http://localhost:3000)  

## 🔐 Security  

- **Plaid API** handles secure authentication and bank linking.  
- **Dwolla API** ensures safe fund transfers.  
- **Appwrite** manages real-time database operations and user authentication.  
- **JWT Authentication** is used for securing user sessions.  

## 🛠️ API Integration  

### 🔗 Plaid API (Bank Account Linking & Transactions)  

- Link bank accounts securely.  
- Fetch and display real-time transaction data.  

### 💳 Dwolla API (Payments & Transfers)  

- Authenticate payments between users.  
- Transfer funds safely between connected bank accounts.  
