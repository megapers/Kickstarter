async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory("CampaignFactory");
  const factory = await Factory.deploy();

  const data = {
    address: factory.address,
    abi: JSON.parse(factory.interface.format('json'))
  };
  const dataJson = JSON.stringify(data);
  console.log('Data: ', dataJson);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });