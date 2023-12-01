import React, {useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Styles from '../layouts/Styles';

const About = () => {
    const handleNamePress = useCallback(() => {
        Alert.alert("Easter Egg", "You found the Easter egg!");
    }, []);

    return (
        <MainLayout>
            <View style={Styles.container}>
                <Text style={Styles.title}>To-Do List App</Text>
                <Text style={Styles.text}>Created by: Ekom Uffort</Text>
                <Text style={Styles.text}>Version: 0.1.4.2096</Text>
                <TouchableOpacity
                    style={Styles.easterEgg}
                    onPress={handleNamePress}
                    accessible={true}
                    accessibilityLabel="Press to reveal Easter egg"
                >
                    <Text style={Styles.easterEggText}>Ekom Uffort (Easter Egg)</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
    );
};

export default About;