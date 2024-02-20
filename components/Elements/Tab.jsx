import { globalColor } from "../../global/globalStyles"
import { Pressable, StyleSheet, Text } from "react-native"
import Icons from "./icons";
import fonts from "../../global/fonts";

const Tab = ({refer, fx, children, isActive}) => {

    const styles = StyleSheet.create({
        button: {
          fontSize: 20,
          backgroundColor: isActive ? globalColor.detailLight : globalColor.detailShadow,
          flex:1,
          borderRadius:5,
          paddingHorizontal:5,
          paddingVertical:10
        },
        color: {
            color: isActive ? globalColor.highLight : globalColor.detailDark,
        },
        tabText: {
            fontSize:20,
            fontFamily:fonts.sansOne,
            textAlign:"center",
            textTransform:"uppercase",
            fontWeight:"bold"
        }
    
      });

return (
    <Pressable onPress={fx} style={[styles.button, styles.color]}>

<Icons refer={refer} size={24} color={styles.color} />
   <Text style={[styles.tabText, styles.color]}> {children} </Text>
</Pressable>
 )
}



export default Tab
