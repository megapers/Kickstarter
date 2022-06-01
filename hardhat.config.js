require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const INFURA_URL = 'https://rinkeby.infura.io/v3/f826a5806c9c424d982e0511e7171f50';
const PRIVATE_KEY = 'ba36f7ba42feab2eefb64702d1cbb5094bc6d895c0466db9976e14d221513595';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

