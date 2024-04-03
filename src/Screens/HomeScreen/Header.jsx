import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import styles from '../HomeScreen/styles';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header() {
    const {user, isLoading}=useUser();

    /** RETURN USER&& - verifica se user tem um valor. 
     * Se user existir, continua a renderizar. 
     * &&, o que significa que, se user for null, undefined ou false, 
     * então a expressão para e nada é renderizado. */

  return user&&(
    <View style={styles.container}>

        {/** Seção do Perfil */}

        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                {/** Exibe a imagem da URL - o operador de encadeamento opcional (?.) 
                 * lidar com o caso em que user ou imageUrl podem ser nulos sem causar
                 *  um erro.*/}
                <Image sourse={{uri:user?.imageUrl}}
                style={styles.userImage}/>

                <View style={styles.text}>
                    <Text> Welcome,</Text>
                    <Text style={{fontSize: 20}}> {user?.fullName} </Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color={Colors.WHITE} />
        </View>

        {/** Seção de Barra de Pesquisa */}

        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Procurar' style={styles.textInput}/>
            <FontAwesome name="search" style={styles.searchbtn} size={24} color={Colors.PRIMARY} />
        </View>
    </View>
  )
}
