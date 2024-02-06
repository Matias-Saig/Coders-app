import { StyleSheet, View } from "react-native";
import Subtitle from "../Elements/Subtitle";
import OptimizedList from "./OptimizedList";
const ContactBook = () => {

  
  return (
    <View style={[styles.container]}>
      <Subtitle>Agenda de contactos</Subtitle>
      
      <OptimizedList />
    </View>
  );
};

export default ContactBook;

const styles = StyleSheet.create({
  container: {
    //width: "100%",
  }
});
