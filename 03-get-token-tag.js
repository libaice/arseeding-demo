const { getTokenTagByEver } = require("arseeding-js");

const main = async () => {
    const currency = 'usdc'
    const tokenTags = await getTokenTagByEver(currency)
    console.log(tokenTags);
};

main();
