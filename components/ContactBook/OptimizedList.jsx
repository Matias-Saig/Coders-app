import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { contactsList } from "../../data/contactList";
import ContactDetail from "./ContactDetail";
import { useState } from "react";
import AddContact from "./AddContact";


const OptimizedList = () => {
  const [contacts, setContacts] = useState(contactsList);

  return (
    <SafeAreaView style={styles.list}>
      <AddContact contacts={contacts} setContacts={setContacts} />

      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactDetail
            renderItem={item}
            contacts={contacts}
            setContacts={setContacts}
          />
        )}
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
    paddingBottom: 200
  },
});
