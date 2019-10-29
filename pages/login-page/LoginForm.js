import React, { Component } from 'react'
import { View } from 'react-native'
import {  Text, Button, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

export class LoginForm extends Component {

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        return (
                <Item>
                    { type === 'password' ?  <Input {...input} secureTextEntry={true}/> : <Input {...input}/>}
                </Item>
        )
    }


    render() {


        const { handleSubmit } = this.props;

        return (
            <View>
                <Item stackedLabel >
                    <Label>Username: </Label>
                    <Field name="username" component={this.renderInput} />
                </Item>
                <Item stackedLabel last>
                    <Label>Password: </Label>
                    <Field name="password" type="password" component={this.renderInput} />
                </Item>
                <Button block primary style={{ marginTop: 10 }}onPress={handleSubmit} >
                    <Text>Sign in</Text>
                </Button>
            </View>
        )
    }
}

LoginForm = reduxForm({ form: 'test' })(LoginForm)

export default LoginForm
