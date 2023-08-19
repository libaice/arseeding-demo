const { genNodeAPI } = require("arseeding-js");

require('dotenv').config();
const run = async () => {
  const instance = genNodeAPI(
    process.env.WALLET_PK
  );
  const arseedUrl = "https://arseed.web3infra.dev";
  const data = Buffer.from(" Hello A New Test From test/plain model ");
  const payCurrencyTag =
    "bsc-bnb-0x0000000000000000000000000000000000000000"; // everpay supported all token tag (chainType-symbol-id)
  const options = {
    tags: [{ name: "Content-Type", value: "text/plain" }],
  };
  const res = await instance.sendAndPay(
    arseedUrl,
    data,
    payCurrencyTag,
    options
  );
  console.log("res", res);
};
run();
