import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../Ethereum/campaign';

export default class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        console.log(await campaign.methods.getSummary().call());
        return {};
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        );
    }
}