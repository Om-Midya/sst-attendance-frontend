import React from "react";

import {StyleSheet, Text, Pressable, Image} from "react-native";

import MicrosoftLogo from '../../../assets/images/microsoft_logo.svg';

function SignUserIn() {
    console.warn("Logging in with Microsoft");
}


const SignInWithMicrosoft = ({}) => {
    return (
        <Pressable onPress={SignUserIn} style={styles.container}>
            <MicrosoftLogo
                />

            <Text style={styles.data}>
                Login with Microsoft
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        width: '90%',
        height: 65,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    data: {
        color: '#cacaca',
        fontSize: 18,
        paddingLeft: 25,
        fontFamily: 'Alata Regular',
    },

});

export default SignInWithMicrosoft;