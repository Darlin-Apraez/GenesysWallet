import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, Image } from "react-native";
import BarStatus from "../components/BarStatus";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  //Modales
  // const [anmt, setanmt] = useState("");

  // setanmt("fadeIn"); animation={anmt} duration={600}

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <BarStatus />
      <View style={stylesB.completo}>
        {/* <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
          Splash
        </Text> */}
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <Image
            style={stylesM.logoGenesys}
            source={require("./../img/GENESYS-LOGO.png")}
          />
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
