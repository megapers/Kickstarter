const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

let Factory, factory, owner, addr1, addr2;
let Campaign, campaign;
let capmaignAddress;


beforeEach(async () => {
  [owner, addr1, addr2, _] = await ethers.getSigners();

  Factory = await ethers.getContractFactory('CampaignFactory');
  factory = await Factory.deploy();

  await factory.createCampaign('100');

  [capmaignAddress] = await factory.getDeployedCampaigns();

  Campaign = await ethers.getContractFactory('Campaign');

  campaign = await Campaign.attach(capmaignAddress);

});

describe('Campaigns', () => {

  it('Deploys a factory and a campaign', () => {
    expect(factory.address, 'Factory is deployed').to.be.ok;
    expect(campaign.address, 'Campaign is deployed').to.be.ok;
  });

  it('Marks caller as the campaign manager', async () => {
    const manager = await campaign.manager();
    expect(manager).to.equal(owner.address);
  });

  it('Allows people to contribute money and marks them as approvers', async () => {
    await campaign.connect(addr1).contribute({ value: '200' });
    const isContributor = await campaign.approvers(addr1.address);
    expect(isContributor).to.be.true;
  });

  it('Requires a minimum contribution', async () => {
    await expect(campaign.connect(addr1).contribute({ value: '5' }))
      .to.be.revertedWith('Not enough tokens');
  });

  it('Allows a manager to make a payment request', async () => {
    await campaign
      .createRequest('Buy batteries', '100', addr1.address, { gasPrice: 200000000 });
    const request = await campaign.requests(0);
    expect('Buy batteries').to.be.equal(request.description);
  });

  it('Processes request', async () => {

    campaign.contribute({ value: ethers.utils.parseEther("10") });

    let initialBalance = await addr1.getBalance();
    initialBalance = parseFloat(initialBalance);
    let moneyPaid = ethers.utils.parseEther("5");

    await campaign.createRequest('A', moneyPaid, addr1.address);

    await campaign.approveRequest(0);

    await campaign.finalizeRequest(0);

    let addr1Balance = await addr1.getBalance();
    addr1Balance = parseFloat(addr1Balance);
    expect(addr1Balance > initialBalance);
  });

});


