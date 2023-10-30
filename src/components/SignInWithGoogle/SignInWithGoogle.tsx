import React from "react";

import {View, StyleSheet, Text, Pressable, Image} from "react-native";

import GoogleLogo from '../../../assets/images/google_logo.svg';

import Logo from '../../../assets/images/google_logo.png';

function SignUserIn() {
    console.warn("Logging in with Google");
}


const SignInWithGoogle = ({}) => {
    return (
        <Pressable onPress={SignUserIn} style={styles.container}>
            <GoogleLogo
                />

            <Text style={styles.data}>
                Login with Google
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        height: 65,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    data: {
        color: '#333333',
        fontSize: 18,
        paddingLeft: 25,
        fontFamily: 'Alata Regular',
    },

});

export default SignInWithGoogle;