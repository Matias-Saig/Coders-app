import { FlatList, StyleSheet, View } from "react-native";
import { contacts } from "../../global/contactList";
import ContactDetail from "./ContactDetail";
const OptimizedList = () => {
  return (
    <View>
    
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactDetail renderItem={item} />}
        keyExtractor={(item) => item.id}
      />
    
    </View>
  );
};

export default OptimizedList;

const styles = StyleSheet.create({});
