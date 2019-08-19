import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEa61FAeED730d6aCF55e15Ecf50dcA53ddE0D1e7'
);

export default instance;