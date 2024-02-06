import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
import CustomModal from "../CustomModal/CustomModal";
import { useState } from "react";

const ContactDetail = ({ renderItem, contacts, setContacts }) => {
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const highlight = isEnabled && {
    backgroundColor: globalColor.detailShadow,
    fontSize: 24,
  };

  // Delete
  const deleteContact = () => {
    setContacts(contacts.filter((elem) => elem.id !== renderItem.id));
  };

  return (
    <View style={[styles.container, highlight]}>
      <Text style={[globalStyles.paragraph, styles.top]}>
        nro {renderItem.id}
      </Text>

      <Text style={[globalStyles.paragraph, styles.top]}>Destacar</Text>

      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={[styles.top, styles.switch]}
      />

      <Text style={[globalStyles.paragraph, styles.name, highlight]}>
        {renderItem.name} {renderItem.lastname}
      </Text>

      <Text style={[globalStyles.paragraph, styles.nickname]}>
        &ldquo;{renderItem.nickname}&rdquo;
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

      {/* Modal */}

      <CustomModal openButtonText={"Borrar"}>
        <Text>
          ¿Quieres borrar este contacto de la agenda? Una vez hecho no se puede
          deshacer
        </Text>

        <Pressable onPress={deleteContact}>
          <Text> ok, borrar contacto </Text>
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
    borderColor: globalColor.lowDark,
    borderRadius: 20,
    elevation: 10,
  },
  top: {
    alignSelf: "flex-end",
    fontSize: 11,
    fontWeight: "bold",
    color: globalColor.highDark,
  },
  switch: {
    height: 15,
    width: 30,
  },
  name: {
    color: globalColor.midShadow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 0,
  },
  nickname: {
    color: globalColor.highDark,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
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
