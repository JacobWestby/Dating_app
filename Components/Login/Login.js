import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {
    return (
        <View style={styles.Container}>
            <Text style={styles.Login}>
                Login
            </Text>
            <View style={styles.InnerContainer} >
                <Text style={styles.Text}>
                    Email
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
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.Touchable}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <View>
                        <Text style={styles.SignUp}>
                            SignUp
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.Forogt}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#231A1F',
        height: "100%",
        width: "100%",
        justifyContent: "center"
    },
    InnerContainer: {
        marginTop: 50,
    },
    Login: {
        color: "white",
        fontSize: 25,
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
    SignUp: {
        fontSize: 20,
        color: "#fff",
        marginTop: 20
    },
    Forogt: {
        marginTop: 20,
        fontSize: 15,
        color: "rgba(255, 255, 255, 0.5)"
    }
})