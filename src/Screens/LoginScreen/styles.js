import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'

    },

    textOne:{
        fontSize: 27,
        color: Colors.WHITE,
        textAlign: 'center',
    },

    textTwo: {
        fontSize: 17,
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 20,
    },

    textThree:{
        textAlign: 'center', 
        fontSize: 17, 
        color: Colors.PRIMARY,
    },

    loginImage:{
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15,
    },

    subContainer:{
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    button:{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40,

    },
})

export default styles;