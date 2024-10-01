
import Zomma from "zomma.js";
import * as dotenv from "dotenv";
import { ethers } from "ethers";
dotenv.config();

const init = async () => {
  const zomma = new Zomma({
    privateKey: process.env.PRIVATE_KEY,
    network: "mainnet", // or 'testnet' for the test network
  });
  await zomma.initialize();

  const markets = await zomma.getMarkets();
  const sellSize = ethers.parseEther(`-0.1`);
  const strike = ethers.parseEther(`60000`);

  const sellCallBTC = async () => {
    // BTC Sell Call Expiry 2024/9/6 60,000 -0.1 size
    const quote = await zomma.getPremium(
      markets[0], //BTC-USDC
      1725609600,
      strike,
      true,
      sellSize.toString()
    );
    console.log(quote);
    const premium = quote[0];
    const fee = quote[1];

    console.log(ethers.formatEther(premium));
    console.log(ethers.formatEther(fee));
  };

  await sellCallBTC();
};

init();