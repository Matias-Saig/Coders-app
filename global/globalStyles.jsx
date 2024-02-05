import { StyleSheet } from "react-native";

// COLORS
export const globalColor = {
  // lights tones
  highLight: "#EFEFEF",
  highShadow: "#CCCCCC",
  hightDark : "#A6A6A6",

  // hightlights
  detailLight: "#F9B176",
  detailShadow: "#FEEECD",
  detailDark: "#D7B791",

  // mid tones
  midLight: "#8894AE",
  midShadow: "#464646",
  midDark: "#2E3D50",

  // dark tones
  lowLight: "#363636",
  lowShadow: "#292C35",
  lowDark: "#17181D"
};


// STYLES
export const globalStyles = StyleSheet.create({
 
  // texts
  title: {
    fontFamily: "serif",
    fontStyle: "italic",
    width: "100%",
    fontWeight:"bold"
  },

  subtitle: {
    fontFamily: "serif",
    fontStyle: "italic",
    width: "100%",
    fontWeight:"bold",
    fontSize: 20,
    color: globalColor.midLight,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },

  // containers
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  containerCenterFull: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});




