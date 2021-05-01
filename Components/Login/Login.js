import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function Login() {
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
                <TouchableOpacity>
                    <Text style={styles.Forogt}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red"

    },
    InnerContainer: {
        marginTop: 50,
        // backgroundColor: "red"
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
    Forogt: {
        marginTop: 20,
        fontSize: 15,
        color: "rgba(255, 255, 255, 0.5)"
    }
})