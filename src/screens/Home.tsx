import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, Image} from 'react-native'
import BarStatus from "../components/BarStatus";
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <BarStatus/>
      <View style={stylesB.completo}>
        <View style={[stylesM.boxImg, stylesL.JustifyAlign]}>
          <Image style={stylesM.boxImg__image} source={require('../../assets/img/GENESYS-LOGO.png')} />
          <Image style={stylesM.boxImg__imageText} source={require('../../assets/img/GENESYSTIP.png')} />
        </View>
        <TouchableOpacity activeOpacity={0.5} style={[stylesM.buttonCreate, stylesM.backgroundCian, stylesL.JustifyAlign,]}>
        <Text style={[stylesM.textBold, stylesM.fontSizeThirtyFive]}>CREATE WALLET</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home