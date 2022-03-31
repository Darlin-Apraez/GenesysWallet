import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, SafeAreaView, Image } from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import * as Animatable from "react-native-animatable";

const Splash = ({ navigation }: { navigation: any }) => {
  function navegar() {
    navigation.navigate("Home")
  }

  setTimeout(() => {
    navegar()
  }, 2500);
  return (
    <SafeAreaView style={stylesB.body}>
      <BarStatus />
      <View style={stylesB.completo}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <Image
            style={stylesM.completo__logoGenesys}
            source={require("../../assets/img/GENESYS-LOGO.png")}
          />
          <Image
            style={stylesM.completo__radiance}
            source={require("../../assets/img/radianceSplash.png")}
          />
        </Animatable.View>
        <Image
          style={stylesM.completo__lettersVortex}
          source={require("../../assets/img/VORTEX.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
