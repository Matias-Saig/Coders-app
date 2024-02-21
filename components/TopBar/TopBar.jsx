import { Platform, Pressable, StatusBar, StyleSheet, View } from "react-native";
import Logo from "./Logo";
import Title from "./Title";
import { globalColor } from "../../global/globalStyles";
import Icons from "../Elements/Icons";
const TopBar = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <Icons refer={"arrowleft"} size={24} color={globalColor.midLight}/>
                </Pressable>}
      <Logo flexWidth={1} />
      <Title flexWidth={3} title={title } />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",    
    backgroundColor: globalColor.midDark,
    paddingVertical:15,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
