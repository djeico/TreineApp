import * as React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import Theme from '../../AppTheme';

export default props => (
    <View style={Theme.container}>
        <Text style={Theme.text}>Home Screen</Text>
        <Text style={Styles.flag}>Styles Screen</Text>
        <Text style={Theme.text}>Default Screen</Text>
    </View>
);