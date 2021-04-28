import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Login() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>
                Login
            </Text>
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
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    Login: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
    },
    Text: {
        fontSize: 20,
        color: "white"
    },
    TextBox: {
        backgroundColor: "#fff",
        height: "23%",
        width: 200
    }
})