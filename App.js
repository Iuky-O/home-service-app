/** Compoentes principais */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
/** Tela de login */
import Login from './src/Screens/LoginScreen/Login';
/** Importando o clerk */
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
/** Navegação */
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/Navigations/TabNavigation';

/** Para o cache */
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    /** Aqui fica a chave dada no Clark.com */
    <ClerkProvider 
      tokenCache={tokenCache} 
      publishableKey='pk_test_ZWxlY3RyaWMtbWFjYXF1ZS03Ni5jbGVyay5hY2NvdW50cy5kZXYk'>

      <View style={styles.container}>

        {/** Sign in component - componente de entrada - renderiza depois do login */}
        <SignedIn>
            <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        
        {/** Sign out component - componente de saida - renderiza sem login - vai ser a tela login.jsx */}
        <SignedOut>
            <Login/>
        </SignedOut>

      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
