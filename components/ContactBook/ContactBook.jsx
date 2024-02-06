import { StyleSheet, View } from "react-native";
import Subtitle from "../Elements/Subtitle";
import OptimizedList from "./OptimizedList";
const ContactBook = () => {

  
  return (
    <View>
      <Subtitle>Agenda de contactos</Subtitle>
      
      <OptimizedList />
    </View>
  );
};

export default ContactBook;

