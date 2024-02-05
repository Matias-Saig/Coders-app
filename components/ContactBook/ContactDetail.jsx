import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
import CustomModal from "../CustomModal/CustomModal";

const ContactDetail = ({ renderItem, contacts, setContacts }) => {
  

  const deleteContact = () => {
    setContacts(contacts.filter(elem => elem.id !== renderItem.id))
    }
  

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.paragraph, styles.id]}>
        nro {renderItem.id}
      </Text>

      <Text style={[globalStyles.paragraph, styles.name]}>
        {renderItem.name} {renderItem.lastname}
      </Text>

      <Text style={[globalStyles.paragraph, styles.rest]}>
        <Text style={styles.span}>CBU</Text>
        {renderItem.cbu}
      </Text>

      <Text style={[globalStyles.paragraph, styles.rest]}>
        <Text style={styles.span}>Alias</Text>
        {renderItem.alias}
      </Text>

      <Text style={[globalStyles.paragraph, styles.rest]}>
        {renderItem.bank}
      </Text>

      <CustomModal openText={"Borrar contacto"} >
        <Text>texto de mas pruebas 2</Text>
        
        <Pressable onPress={deleteContact}>
<Text> Borrar contacto </Text>
        </Pressable>
      </CustomModal>

     
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.white,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    border: 12,
    // borderStyle: "solid",
    borderColor: globalColor.lowDark,
    borderRadius: 20,
    elevation: 10,
  },
  id: {
    textAlign: "right",
    fontSize: 10,
    fontWeight: "bold",
    color: globalColor.highShadow,
  },
  name: {
    color: globalColor.midShadow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  rest: {
    color: globalColor.midShadow,
  },
  span: {
    display: "inline",
    fontWeight: "bold",
    marginRight: 5,
  },
});
