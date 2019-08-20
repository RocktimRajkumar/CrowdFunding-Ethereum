import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';


export default class ContributeForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                    />
                </Form.Field>
                <Button primary>
                    Contribute!
                </Button>
            </Form>
        );
    }
}