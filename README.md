📌 Real-Time ETH/USD Price API
🚀 A simple Node.js backend that fetches the real-time ETH/USD price from a Chainlink smart contract using Web3 and Infura.


📖 Project Overview
This project provides an API to fetch the real-time ETH/USD price using Chainlink’s price feed smart contract on the Ethereum blockchain. It connects to Infura to get up-to-date blockchain data.

⚙️ Features
✅ Fetches real-time ETH/USD price
✅ Retrieves price feed metadata (description, decimals)
✅ Uses Infura for a reliable Ethereum connection
✅ Built with Node.js, Express, and Web3.js

🚀 Getting Started

1️⃣ Clone the Repository

git clone
https://github.com/dev14325/backend-smartcontract

cd backend-smartcontract

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file in the root directory and add your Infura URL:

INFURA_URL="https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
Replace YOUR_INFURA_PROJECT_ID with your actual Infura project ID.

🛠 Smart Contract Details

🔹 Contract Address: 0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419

🔹 Network: Ethereum Mainnet

🔹 Contract ABI:

[
    {
        "inputs": [],
        "name": "latestRoundData",
        "outputs": [
            { "name": "roundId", "type": "uint80" },
            { "name": "answer", "type": "int256" },
            { "name": "startedAt", "type": "uint256" },
            { "name": "updatedAt", "type": "uint256" },
            { "name": "answeredInRound", "type": "uint80" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint8" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "description",
        "outputs": [{ "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    }
]

📡 API Endpoints

1️⃣ Get Real-Time ETH/USD Price

🔹 Endpoint:


GET /api/eth-price-details

🔹 Example Response:



{
    "EthPriceInUSD": 2734.442498,
    "decimals": 8,
    "description": "ETH / USD"
}
