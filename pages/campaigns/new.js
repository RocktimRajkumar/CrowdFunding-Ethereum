import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form>
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