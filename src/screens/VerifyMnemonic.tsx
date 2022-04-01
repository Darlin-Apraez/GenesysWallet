import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const VerifyMnemonic = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={stylesB.body}>
      <BarStatus />
      <View style={stylesB.completo}>
        <View style={[stylesM.boxTitle, stylesM.widthRectangle]}>
          <Text
            style={[
              stylesM.textColorCian,
              stylesM.fontSizeTwentyThree,
              stylesM.textBold,
            ]}
          >
            Verify your mnemonic.
          </Text>
          <Text
            style={[
              stylesM.textColorWhite,
              stylesM.fontSizeEighteen,
              stylesM.boxTitle_subtitle,
            ]}
          >
            Choose each word in the correct order.
          </Text>
        </View>
        <LinearGradient
          style={stylesM.boxGradient}
          colors={[
            "#00FFFF",
            "#17C8FF",
            "#329BFF",
            "#4C64FF",
            "#6536FF",
            "#8000FF",
          ]}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0, y: 1 }}
        >
          <Text
            style={[stylesM.backgroundBlack, stylesM.boxGradient_boxBlack]}
          ></Text>
        </LinearGradient>

        <View style={stylesM.boxWords}>
          <View style={stylesM.boxWords_rowOne}>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowOne_boxOne,
                stylesM.backgroundPurpleDark,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeEighteen,
                  stylesM.textAlignCenter,
                ]}
              >
                sell
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowOne_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topSeventeen,
                stylesO.boxWords_rowOne_boxOne__top,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                try
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowOne_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topRow,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                caution
              </Text>
            </TouchableOpacity>
          </View>

          <View style={stylesM.boxWords_rowTwo}>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowTwo_boxOne,
                stylesM.backgroundCianBox,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                sell
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowTwo_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topSeventeen,
                stylesO.boxWords_rowOne_boxOne__top,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                hello
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowTwo_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topRow,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                caution
              </Text>
            </TouchableOpacity>
          </View>

          <View style={stylesM.boxWords_rowThree}>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowThree_boxOne,
                stylesM.backgroundCianBox,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                lost
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowThree_boxOne,
                stylesM.backgroundPurpleDark,
                stylesM.topSeventeen,
                stylesO.boxWords_rowOne_boxOne__top,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeEighteen,
                  stylesM.textAlignCenter,
                ]}
              >
                beat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowThree_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topRow,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                caution
              </Text>
            </TouchableOpacity>
          </View>

          <View style={stylesM.boxWords_rowFour}>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowFour_boxOne,
                stylesM.backgroundCianBox,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                lost
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowFour_boxOne,
                stylesM.backgroundCian,
                stylesM.topSeventeen,
                stylesO.boxWords_rowOne_boxOne__top,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                beat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesM.boxWords_rowFour_boxOne,
                stylesM.backgroundCianBox,
                stylesM.topRow,
              ]}
            >
              <Text style={[stylesM.fontSizeEighteen, stylesM.textAlignCenter]}>
                caution
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[stylesM.backgroundCian, stylesM.boton_top]}
          onPress={() => navigation.navigate("EnterPassword")}
        >
          <Text style={[stylesM.fontSizeTwentyFour, stylesM.textBold]}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerifyMnemonic;
