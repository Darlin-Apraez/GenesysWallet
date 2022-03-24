import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const ReceiveToken = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar
        backgroundColor={'#FBF7FF'}
        barStyle={"dark-content"}
      />
      <View style={stylesB.completo}>
        <Text style={[stylesM.textColorBlack, stylesM. fontSizeSixteen]}>ReceiveToken</Text>
      </View>
    </SafeAreaView>
  )
}

export default ReceiveToken