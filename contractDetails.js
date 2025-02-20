// contractDetails.js

module.exports = {
    contractAddress: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419", // Replace with your contract address
    contractABI: [
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
};