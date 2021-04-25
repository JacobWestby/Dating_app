import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script';

export default function Headline() {
    let [fontsLoaded] = useFonts({
        DancingScript_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <Text style={{
        fontFamily: 'DancingScript_600SemiBold',
        fontSize: 50
    }}>Amatory</Text>;
}