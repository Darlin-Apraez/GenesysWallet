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

  fontSizeThirtyFive: {
    fontSize: RFValue(28),
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
    backgroundColor: "#120250",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },

  backgroundTurquoise: {
    backgroundColor: "#70e0f9",
  },

  backgroundCianBox: {
    backgroundColor: "#70FDEF",
  },

  widthRectangle: {
    width: RFValue(305),
  },

  radiusFive: {
    borderRadius: 5,
  },

  radiusEight: {
    borderRadius: 8,
  },

  radiusFifteen: {
    borderRadius: 15,
  },

  radiusTwentyNine: {
    borderRadius: 29,
  },

  topSeventeen: {
    top: 17,
  },

  topRow: {
    top: 50,
  },

  textAlignCenter: {
    textAlign: "center",
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
  boxImg: {
    marginTop: 76,
  },

  boxImg__image: {
    width: 192,
    height: 192,
    resizeMode: "contain",
  },

  boxImg__imageText: {
    width: 236,
    height: 42,
    resizeMode: "contain",
    marginTop: 26,
  },

  buttonHome: {
    marginTop: 283,
    width: 232,
    height: 47,
  },
  //FinHome

  //VerifyMnemonic
  boxTitle: {
    marginTop: 80,
    marginLeft: 15,
  },

  boxTitle_subtitle: {
    marginTop: 17,
  },

  boxGradient: {
    height: 304,
    width: 326,
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 5,
  },

  boxGradient_boxBlack: {
    height: 296,
    width: 318.5,
    top: 2,
    left: 2,
    borderRadius: 5,
  },

  boxWords: {
    height: 110,
    top: 55,
    width: 322,
    marginLeft: 2,
  },

  boxWords_rowOne: {
    width: 67,
    height: 110,
    //backgroundColor: "purple",
  },

  boxWords_rowOne_boxOne: {
    height: 21,
    width: 67,
    borderRadius: 3,
  },

  boxWords_rowTwo: {
    width: 67,
    height: 110,
    left: 85,
    top: -110,
    //backgroundColor: "yellow",
  },

  boxWords_rowTwo_boxOne: {
    height: 21,
    width: 67,
    borderRadius: 3,
  },

  boxWords_rowThree: {
    width: 67,
    height: 110,
    left: 170,
    top: -220,
    //backgroundColor: "blue",
  },

  boxWords_rowThree_boxOne: {
    height: 21,
    width: 67,
    borderRadius: 3,
  },

  boxWords_rowFour: {
    width: 67,
    height: 110,
    left: 255,
    top: -330,
    //backgroundColor: "green",
  },

  boxWords_rowFour_boxOne: {
    height: 21,
    width: 67,
    borderRadius: 3,
  },

  boton_top: {
    top: 120,
  },
  //FinVerifyMnemonic
});
