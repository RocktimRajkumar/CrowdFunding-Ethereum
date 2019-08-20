import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../Ethereum/campaign';
import web3 from '../Ethereum/web3';
import { Router } from '../routes';


export default class ContributeForm extends Component {
    state = {
        value: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (error) {

        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        label="ether"
                        labelPosition="right"
                        onChange={event => this.setState({
                            value: event.target.value
                        })}
                    />
                </Form.Field>
                <Button primary>
                    Contribute!
                </Button>
            </Form>
        );
    }
}