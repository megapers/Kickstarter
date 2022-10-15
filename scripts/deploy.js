async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory("CampaignFactory");
  const factory = await Factory.deploy();

  await factory.deployed();
  console.log("Contract deployed to:", factory.address);

  // const data = {
  //   address: factory.address,
  //   abi: JSON.parse(factory.interface.format('json'))
  // };
  // const dataJson = JSON.stringify(data);
  // console.log('Data: ', dataJson);

  saveFrontendFiles(factory);
}

function saveFrontendFiles(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../ethereum/abis";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ KICKSTARTER: contract.address }, undefined, 2)
  );

  const CampaignFactory = hre.artifacts.readArtifactSync("CampaignFactory");

  fs.writeFileSync(
    contractsDir + "/CampaignFactory.json",
    JSON.stringify(CampaignFactory, null, 2)
  );

  const Campaign = hre.artifacts.readArtifactSync("Campaign");

  fs.writeFileSync(
    contractsDir + "/Campaign.json",
    JSON.stringify(Campaign, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });