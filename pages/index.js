import React, { Component } from 'react';
import factory from '../Ethereum/factory';
import { Card } from 'semantic-ui-react';

class CampaignIndex extends Component {

    static async getInitialProps() {
        // next js execute on the server side
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        {this.renderCampaigns()}
        </div>;
    }
}

export default CampaignIndex;