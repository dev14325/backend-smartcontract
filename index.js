const express = require("express");
const { Web3 } = require("web3");
require("dotenv").config();
const app = express();
const {contractAddress,contractABI} = require('./contractDetails')


// Initialize Web3 with Infura (or another provider)
const web3 = new Web3(process.env.INFURA_URL);
const contract = new web3.eth.Contract(contractABI, contractAddress);


// API Route to fetch multiple contract functions
app.get("/api/eth-price-details", async (req, res) => {
    try {
        // Fetch ETH/USD price
        const priceData = await contract.methods.latestRoundData().call();
        const price = Number(priceData.answer) / 1e8; // Convert price to a readable format

        // Fetch decimal places
        const decimals = Number(await contract.methods.decimals().call());

        // Fetch price feed description
        const description = await contract.methods.description().call();

        console.log("ETH/USD Price:", price);
        console.log("Decimals:", decimals);
        console.log("Feed Description:", description);

        res.json({
          
            EthPriceInUSD: price,
            decimals,
            description
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start Server
app.listen(3000);
// module.exports = app;