import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Login() {
    return (
        <View style={{
            width: "70%",
            marginTop: "30%"
        }}>
            <Text style={styles3.Login}>
                Login
            </Text>

            <Text style={styles2.Text}>
                Email
            </Text>

            <TextInput
                style={styles1.textBox}
            />

            <Text style={styles2.Text}>
                Password
            </Text>
            
            <TextInput
                style={styles1.textBox}
            />
        </View>
    )
}

const styles3 = StyleSheet.create({
    Login: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        marginBottom: 40
    }
})

const styles2 = StyleSheet.create({
    Text: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        color: "white"

    }
})

const styles1 = StyleSheet.create({
    textBox: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#fff",
        height: "13%"
    }

})