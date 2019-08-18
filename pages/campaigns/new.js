import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    onSubmit = async (event) => {
        event.preventDefault(); // keep the browser to automatically submit the form to the server

        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => {
                                this.setState({ minimumContribution: event.target.value })
                            }}
                        />
                    </Form.Field>

                    <Button type="submit" primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}