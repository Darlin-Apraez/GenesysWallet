import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const stylesM = StyleSheet.create({
   // =====================================================================
  // VARIABLES UNITARIAS
  // =====================================================================
  textColorWhite: {
    color: "white",
  },

  textColorBlack: {
    color: "black",
  },

  textColorCian: {
    color: "#1ee3cf",
  },

  textColorPurple: {
    color: "#5a35b7",
  },

  textBold: {
    fontWeight: "bold",
  },

  textLight: {
    fontWeight: "normal",
  },

  fontSizeSixteen: {
    fontSize: RFValue(13),
  },

  fontSizeEighteen: {
    fontSize: RFValue(15),
  },

  fontSizeTwenty: {
    fontSize: RFValue(17),
  },

  fontSizeTwentyThree: {
    fontSize: RFValue(19),
  },

  fontSizeTwentyFour: {
    fontSize: RFValue(20),
  },

  fontSizeThirtyFive:{
    fontSize:RFValue(28)
  },

  fontSizeTwentySix: {
    fontSize: RFValue(22),
  },

  fontSizeSeventyFive: {
    fontSize: RFValue(63),
  },

  backgroundRed: {
    backgroundColor: "red",
  },

  backgroundBlack: {
    backgroundColor: "black",
  },

  backgroundCian: {
    backgroundColor: "#1ee3cf",
  },

  backgroundPurpleDark: {
    backgroundColor: "#110250",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },

  backgroundTurquoise: {
    backgroundColor: "#70e0f9",
  },

  // =====================================================================
  // FIN VARIABLES UNITARIAS
  // =====================================================================

  //Splash

  completo__logoGenesys: {
    height: RFValue(247),
    marginTop: RFValue(176),
    marginHorizontal: RFValue(50),
    width: RFValue(247),
  },
  completo__lettersVortex: {
    height: RFValue(10),
    bottom: 43,
    position: "absolute",
    width: RFValue(78),
  },

  completo__radiance: {
    height: RFValue(182.9),
    width: RFValue(219.5),
    position: "relative",
    bottom: 170,
    left: 65,
    opacity: 0.9,
  },

  //FinSplash

   //Home
   boxImg:{
    marginTop:76,
  },
  
  boxImg__image:{
    width:192,
    height:192,
    resizeMode:"contain",
  },
  
  boxImg__imageText:{
    width:236,
    height:42,
    resizeMode:"contain",
    marginTop:26
  },

  buttonHome:{ 
    marginTop:283,
    width:232,
    height:47,
    borderRadius:15
  }
  //FinHome
});
