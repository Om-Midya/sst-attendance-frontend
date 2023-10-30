import React from "react";

import {Image, View, Text, StyleSheet, useWindowDimensions} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Logo from '../../../assets/images/scaler_logo.svg';

import SignInWithGoogle from "../../components/SignInWithGoogle";
import SignInWithMicrosoft from "../../components/SignInWithMicrosoft";
import HavingTrouble from "../../components/HavingTrouble";

const SignInScreen = () => {

    const {height} = useWindowDimensions();

    return (

        <LinearGradient colors={['#5B5ABE', '#6D73FB', '#85A0FF']} style={{height: '100%'}} >

            <View style={styles.root}>
                <Logo 
                    size={height * 0.4}
                    style={styles.logo}
                />
            </View>

            <View style={[styles.atBottom]}>
                <SignInWithGoogle />
                <SignInWithMicrosoft />
                <HavingTrouble />
            </View>
            
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        maxWidth: 300,
        maxHeight: 100,
        marginVertical: '25%',
    },
    atBottom: {
        padding: 15,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: "8%",
    }
});


export default SignInScreen;