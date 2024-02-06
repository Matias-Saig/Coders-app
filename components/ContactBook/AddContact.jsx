import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomModal from "../CustomModal/CustomModal";
import { globalColor, globalStyles } from "../../global/globalStyles";
const AddContact = ({ contacts, setContacts }) => {
  // Modal
  const [toggleModal, setToggleModal] = useState(false);

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
  const addContact = () => {
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
    setToggleModal(!toggleModal);
    Alert.alert("Contacto agregado");
  };

  return (
    <CustomModal
      openButtonText={"Agendar contacto"}
      openStyle={[globalStyles.buttons, styles.sendButton]}
      openTextStyle={[globalStyles.buttonsText, styles.sendText]}
      toggleModal={toggleModal}
      setToggleModal={setToggleModal}
    >
      <ScrollView style={styles.scroll}>
        <View style={globalStyles.containerCenter}>
          <Text style={globalStyles.inputLabel}>Nombre</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleName}
            value={newContactName}
            placeholder="Nombre"
          />

          <Text style={globalStyles.inputLabel}>Apellido</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleLastname}
            value={newContactLastname}
            placeholder="Apellido"
          />

          <Text style={globalStyles.inputLabel}>Apodo</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleNickname}
            value={newContactNickname}
            placeholder="Apodo"
          />

          <Text style={globalStyles.inputLabel}>Banco</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleBank}
            value={newContactBank}
            placeholder="Banco"
          />

          <Text style={globalStyles.inputLabel}>CBU</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleCbu}
            value={newContactCbu}
            placeholder="Cbu"
            inputMode="numeric"
          />

          <Text style={globalStyles.inputLabel}>Alias</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleAlias}
            value={newContactAlias}
            placeholder="Alias"
          />

          <TouchableOpacity
            onPress={addContact}
            style={[globalStyles.buttons, styles.sendButton]}
          >
            <Text style={[globalStyles.buttonsText, styles.sendText]}>
              Agendar nuevo contacto
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CustomModal>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: globalColor.detailLight,
  },
  sendText: {
    color: globalColor.midDark,
  },
  scroll: {
    width: "100%",
  },
});
