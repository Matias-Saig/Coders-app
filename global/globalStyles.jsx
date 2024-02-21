import { StyleSheet } from "react-native";
import fonts from "./fonts";

// COLORS
export const globalColor = {
  // lights tones
  white: "#FBFBFB",
  highLight: "#F7F7F7",
  highShadow: "#CCCCCC",
  highDark: "#A6A6A6",

  // hightlights
  detailLight: "#F9B176",
  detailShadow: "#FEEECD",
  detailDark: "#D7B791",
  error: "#e63946",

  // mid tones
  midLight: "#8894AE",
  midShadow: "#767676",
  midDark: "#2E3D50",

  // dark tones
  lowLight: "#363636",
  lowShadow: "#292C35",
  lowDark: "#17181D",
};

// STYLES
export const globalStyles = StyleSheet.create({
  // Background
  BG: {
    backgroundColor: globalColor.highLight,
  },

  // texts
  title: {
    fontStyle: "italic",
    fontFamily: fonts.title,   
    width: "100%",
    fontWeight: "bold",
  },

  subtitle: {
    fontFamily: fonts.serif,
    width: "100%",
    fontWeight: "bold",
    fontSize: 22,
    color: globalColor.midLight,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },

  paragraph: {
    fontFamily: fonts.sans,
    fontWeight: "normal",
    color: globalColor.lowDark,
    marginVertical: 3,
    fontSize: 16,
    lineHeight: 22,
  },

  // inputs
  buttons: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonsText: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  input: {
    height: 40,
    width: "90%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: globalColor.highDark,
    borderRadius: 5,
    padding: 10,
    backgroundColor: globalColor.white,
  },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 5,
    color: globalColor.midDark,
    fontSize: 16,
  },
});
