const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compileFactory = require('../Ethereum/build/CampaignFactory.json');
const compileCampaign = require('../Ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
    .deploy({ data: compileFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); // [campaignAddress] =>  campaignAddress = address[0]

  campaign = await new web3.eth.Contract(
    JSON.parse(compileCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
  it('deploys a factory and Campaigns', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaign.methods.contribute().send({
      value: 200,
      from: accounts[1]
    });

    assert(await campaign.methods.approvers(accounts[1]).call());

  });

  it('requires a minimum contribution', async () => {
    var check = true;
    try {
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: 200
      });
      check = false;
    } catch (error) {
      check = true;
    }
    if (check) {
      assert(false);
    } else {
      assert(true);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods.createRequest('Buy solar light', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: 1000000
      });

    const request = await campaign.methods.requests(0).call();

    assert.equal('Buy solar light', request.description);

  });

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    var beforeBlnc = await web3.eth.getBalance(accounts[1]);

    await campaign.methods.createRequest('Buy solar light', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: 1000000
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    var afterBlnc = await web3.eth.getBalance(accounts[1]);
    beforeBlnc = parseFloat(web3.utils.fromWei(beforeBlnc, 'ether'));
    afterBlnc = parseFloat(web3.utils.fromWei(afterBlnc, 'ether'));
    
    assert(afterBlnc + 4 > beforeBlnc);

  });

});
