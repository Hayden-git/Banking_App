
# 🏦 Banking App  

A modern, secure, and mobile-responsive banking app built with **TypeScript, React, Next.js, and ShadCN**. This app allows users to **view transactions, add bank accounts, send funds, and authenticate payments** seamlessly using **Plaid API** and **Dwolla API**. The backend is powered by **Appwrite**, a real-time database and authentication platform.  

# See the demo here
https://banking-app-mu-pink.vercel.app/

ATTENTION: When creating an account, the form asks for personal data like name, address, date of Birth, and SSN just like any banking platform may... However, PLEASE do not use real personal information. This app is still using Plaid's sandbox API and DOES NOT have access to your real banking information. This is merely a proof of concept using sandboxed banking data from the Plaid API.

- **When making an account:**
- PLEASE make sure to type in the Date of Birth in "YYYY-DD-MM" format... (Ex: 1988-02-01)
- Use any random or fake address and postal code you would like... (Ex: 123 Place St, New York City, NY 12345)
- For the SSN, any set of random numbers will work... please do not use your real SSN... (Ex: 123 45 6789)

## 🚀 Features  

✅ **View Transactions** – Users can see their transaction history, including amounts, categories, and payment statuses.  
✅ **Add Bank Accounts** – Connect checking or savings accounts securely using **Plaid API**.  
✅ **Transaction Authentication** – Securely authenticate payments and transactions via **Plaid** and **Dwolla**.  
✅ **Send Funds** – Transfer money safely between users with **Dwolla API**.  
✅ **Copy Transaction IDs** – Easily copy and share transaction identifiers.  
✅ **Mobile Responsive** – Fully optimized for mobile and desktop usage.  



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

## 🖥️ Screenshots  

Here are some screenshots of the app:  

<img width="1918" alt="image" src="https://github.com/user-attachments/assets/8f8f0a00-db76-41bb-b772-e8c9d6e49ddb" />
<img width="359" alt="image" src="https://github.com/user-attachments/assets/78b3681c-fa42-4511-9adc-cafb2b412e78" />

<img width="1912" alt="image" src="https://github.com/user-attachments/assets/cf17b5e7-08ec-4612-bf80-59809a9b2cf0" />

<img width="620" alt="image" src="https://github.com/user-attachments/assets/1db3b08a-8a6d-4b0d-b621-1d3e29d9664a" />
<img width="1062" alt="image" src="https://github.com/user-attachments/assets/69fdd029-f0e2-4396-b356-26ccc2f58e71" />

<img width="440" alt="image" src="https://github.com/user-attachments/assets/72c7e40f-e17e-4aaa-a783-ebb336f4d1fd" />


