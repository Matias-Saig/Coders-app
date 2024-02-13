import { StyleSheet, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import OptimizedList from "../components/ContactBook/OptimizedList";
const ContactBook = () => {

  
  return (
    <View>
      <Subtitle>Agenda de contactos</Subtitle>
      
      <OptimizedList />
    </View>
  );
};

export default ContactBook;

