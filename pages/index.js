import React, { Component } from 'react';
import factory from '../Ethereum/factory';

class CampaignIndex extends Component {

    static async getInitialProps() {
        // next js execute on the server side
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    render() {
        return <div>{this.props.campaigns[0]}</div>;
    }
}

export default CampaignIndex;