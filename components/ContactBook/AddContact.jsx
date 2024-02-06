import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
const AddContact = ({ contacts, setContacts }) => {
  
  // States
    const [newContactId, setNewContactId] = useState(
    Math.max(...contacts.map((item) => item.id)) + 1,
  );

  const [newContactName, setNewContactName] = useState("");
  const [newContactLastname, setNewContactLastname] = useState("");
  const [newContactNickname, setNewContactNickname] = useState("");
  const [newContactBank, setNewContactBank] = useState("");
  const [newContactCbu, setNewContactCbu] = useState("");
  const [newContactAlias, setNewContactAlias] = useState("");
  const [newContact, setNewContact] = useState([]);

  // Handles
  const handleName = (text) => {
    setNewContactName(text);
  };
  const handleLastname = (text) => {
    setNewContactLastname(text);
  };
  const handleNickname = (text) => {
    setNewContactNickname(text);
  };
  const handleBank = (text) => {
    setNewContactBank(text);
  };
  const handleCbu = (text) => {
    setNewContactCbu(text);
  };
  const handleAlias = (text) => {
    setNewContactAlias(text);
  };

  // edit function
  const editContact = () => {
    setNewContactId(newContactId + 1);
    
    setNewContact([
      (newContact.id = newContactId),
      (newContact.name = newContactName),
      (newContact.lastname = newContactLastname),
      (newContact.nickname = newContactNickname),
      (newContact.bank = newContactBank),
      (newContact.cbu = newContactCbu),
      (newContact.alias = newContactAlias),
    ]);

    setContacts([newContact, ...contacts]);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleName}
        value={newContactName}
        placeholder="Nombre"
      />

      <TextInput
        style={styles.input}
        onChangeText={handleLastname}
        value={newContactLastname}
        placeholder="Apellido"
      />

      <TextInput
        style={styles.input}
        onChangeText={handleNickname}
        value={newContactNickname}
        placeholder="Apodo"
      />

      <TextInput
        style={styles.input}
        onChangeText={handleBank}
        value={newContactBank}
        placeholder="Banco"
      />

      <TextInput
        style={styles.input}
        onChangeText={handleCbu}
        value={newContactCbu}
        placeholder="Cbu"
      />

      <TextInput
        style={styles.input}
        onChangeText={handleAlias}
        value={newContactAlias}
        placeholder="Alias"
      />

      <Pressable onPress={editContact}>
        <Text>prueba</Text>
      </Pressable>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
