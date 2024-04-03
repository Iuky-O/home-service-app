import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from "@clerk/clerk-expo";

import { useWarmUpBrowser } from '../../Hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  useWarmUpBrowser();

  /** Aqui permite fazer login usando a conta do google Para autenticação..se for facebook mude para esse nome */
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  /** Função assincrona para o botão de login - cuida da autenticação */
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View style = {styles.container}>
        <Image source={require('./../../../assets/images/login.png')}
          style = {styles.loginImage}
        />

      <View style={styles.subContainer}>

        <Text style={styles.textOne}> 
          Let's Find 
          <Text style={{fontWeight: 'bold'}}> Professional Cleaning and Repair </Text> 
          Service
        </Text>

        <Text style={styles.textTwo}>
          Best App to find services near you which deliver you a professional service
        </Text>

        {/** Botão para enviar o usuário */}
        <TouchableOpacity style={styles.button}
        onPress={onPress}>
          <Text style={styles.textThree}> Let's Get Started </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

/**Estetização interna: <Text style={{fontSize: 27, color: Colors.WHITE}}> INTERNO </Text> */

/*const styles = StyleSheet.create({
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
})*/