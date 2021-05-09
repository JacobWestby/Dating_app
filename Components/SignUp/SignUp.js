import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp({ navigation }) {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.BackContainer}>
                <TouchableOpacity style={styles.Back} onPress={() => navigation.goBack()} title="Back" >
                    <Text style={styles.Text}>
                        {"< Back"}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.Login}>
                Create Account
        </Text>
            <View>
                <Image source={{ uri: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png" }} style={styles.profilePic}
                />
            </View>
            <View style={styles.ButtonContainer}>
                <Button title="Choose a profile picture" />
            </View>
            <View>
                <Text style={styles.Text}>
                    Email
        </Text>
                <View>
                    <TextInput style={styles.TextBox} placeholder="Email" placeholderTextColor="#f4f4" />
                </View>
                <Text style={styles.Text}>
                    Confirm Email
        </Text>
                <View>
                    <TextInput style={styles.TextBox} placeholder="Email" placeholderTextColor="#f4f4" />
                </View>
                <Text style={styles.Text}>
                    Password
        </Text>
                <View>
                    <TextInput style={styles.TextBox} placeholder="Password" placeholderTextColor="#f4f4" />
                </View>
                <Text style={styles.Text}>
                    Confirm Password
        </Text>
                <View>
                    <TextInput style={styles.TextBox} placeholder="Email" placeholderTextColor="#f4f4" />
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.Touchable}>
                        Continue
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#231A1F',
        justifyContent: "center",
    },
    Login: {
        color: "white",
        fontSize: 25,
        marginBottom: 40
    },
    profilePic: {
        height: 100,
        width: 80
    },
    Text: {
        marginBottom: 12,
        fontSize: 20,
        color: "white"
    },
    TextBox: {
        backgroundColor: "#fff",
        width: 200,
        marginBottom: 12
    },
    Touchable: {
        fontSize: 20,
        color: "#fff"
    },
    ButtonContainer: {
        marginTop: 13,
        marginBottom: 30,
    },
    Choose: {
        fontSize: 16,
        color: "white",
    },
    BackContainer: {
        position: "absolute",
        top: 20,
        left: 30
    }
})