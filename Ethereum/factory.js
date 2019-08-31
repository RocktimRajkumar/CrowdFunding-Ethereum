import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6eb1BAb08268e4aBf4585875db85Ce224E68da1f'
);

export default instance;