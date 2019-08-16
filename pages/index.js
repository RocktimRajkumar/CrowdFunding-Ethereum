import React, { Component } from 'react';
import factory from '../Ethereum/factory';

class CampaignIndex extends Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
    }

    render() {
        return <div>hello</div>;
    }
}

export default CampaignIndex;