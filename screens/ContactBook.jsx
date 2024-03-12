import { View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import OptimizedList from "../components/ContactBook/OptimizedList";
const ContactBook = ({ navigation }) => {
  return (
    <View>
      <Subtitle>Agenda de contactos</Subtitle>

      {/* <OptimizedList navigation={navigation} /> */}
    </View>
  );
};

export default ContactBook;
