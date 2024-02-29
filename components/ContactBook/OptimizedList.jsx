import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import { useSelector } from "react-redux";

const OptimizedList = ({ navigation }) => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <SafeAreaView style={styles.list}>
      <AddContact contacts={contacts} navigation={navigation} />

      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactDetail renderItem={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default OptimizedList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    alignItems: "center",
    paddingBottom: 200,
  },
});
