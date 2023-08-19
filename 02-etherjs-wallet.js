const { ethers } = require("ethers");
require('dotenv').config();

const main = async () => {
    const wallet = new ethers.Wallet(process.env.WALLET_PK);
    console.log(wallet.address)
};

main()