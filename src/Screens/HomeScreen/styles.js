import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius: 25,
    },

    userImage:{
        width: 45,
        height: 45,
        borderRadius: 99,
    },

    profileMainContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    profileContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },

    searchBarContainer:{
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
    },

    searchbtn:{
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8,
    },

    text:{
        color: Colors.WHITE,
    },

    textInput:{
        padding: 7,
        paddingHorizontal: 14,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: "85%",
        fontSize: 16,
    }
})

export default styles;