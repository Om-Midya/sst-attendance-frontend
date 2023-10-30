import React from "react";

import {View, StyleSheet, Text, Pressable, Image} from "react-native";

function havingTrouble() {
    console.warn("Having trouble?");
}

const HavingTrouble = () => {
    return (
        <Pressable onPress={havingTrouble} style={styles.container}>

            <Text style={styles.data}>
                Having trouble? Raise an issue
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '90%',
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    data: {
        color: '#e4e4e4',
        fontSize: 13,
        fontFamily: 'Alata Regular',
    },

});

export default HavingTrouble;