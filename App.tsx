import {stylesB, stylesL, stylesM, stylesO, stylesS} from '././src/appTheme/styles/styles'
import { SafeAreaView, Text, View,StatusBar } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar
        backgroundColor={'#FBF7FF'}
        barStyle={"dark-content"}
      />
      <View style={stylesB.completo}>
        <Text style={stylesM.textColorBlack}>Bienvenido a Genesys</Text>
      </View>
    </SafeAreaView>
    
  );
}


