import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomModal from "../CustomModal/CustomModal";
import { globalColor, globalStyles } from "../../global/globalStyles";
const AddContact = ({ contacts, setContacts, navigation }) => {
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

          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => navigation.popToTop()}
              style={[globalStyles.buttons, styles.retryButton, styles.button]}
            >
              <Text style={[globalStyles.buttonsText, styles.sendText, styles.retryText]}>Cancelar</Text>
            </Pressable>
            <Pressable
              onPress={addContact}
              style={[globalStyles.buttons, styles.sendButton, styles.button]}
            >
              <Text style={[globalStyles.buttonsText, styles.sendText]}>
                Agendar
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </CustomModal>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: globalColor.detailLight,
    marginBottom:20,
  },
  retryButton :{
    backgroundColor: globalColor.midShadow,
  },
  retryText: {
    color: globalColor.highShadow,
  },
  button:{
    width: "40%",
    alignSelf: "center",
    elevation: 3,
    marginBottom: 10,
  },
  sendText: {
    color: globalColor.midDark,
    fontSize: 16,
    textAlign: "center",
  },
  scroll: {
    width: "100%",
  },
  buttonsContainer: {
    flexDirection:"row",
    justifyContent:"space-around",
    width:"90%",
    marginTop:20
  }
});
