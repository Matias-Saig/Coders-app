import { Platform } from "react-native"

export const fontsCollection = {
    "crimson":require("../assets/fonts/CrimsonPro-Variable.ttf"),
    "inter":require("../assets/fonts/Inter-Variable.ttf"),
    "spartan":require("../assets/fonts/LeagueSpartan-Variable.ttf"),
    "baskerville":require("../assets/fonts/LibreBaskerville-Regular.ttf"),
  }
  
  // android font fallback
  const fonts = {
    title: Platform.select({
      web:"baskerville, crimson, serif",
      android: "serif"
    }),
    serif: Platform.select({
      web:"crimson, serif",
      android: "serif"
    }),
    sans: Platform.select({
      web:"spartan, inter, sans-serif",
      android: "sans-serif"
    })
        
  }

  export default fonts
