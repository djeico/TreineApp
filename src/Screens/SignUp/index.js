import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeNavigation } from "../../Navigation";
import Styles from './styles';

export default props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>SignUp</Text>
        <Button
            title="Login"
            onPress={() => {
                props.navigation.navigate('Login');
            }}
        />
    </View>
);