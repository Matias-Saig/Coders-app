import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
import CustomModal from "../CustomModal/CustomModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../features/Contacts/ContactsSlice";

const ContactDetail = ({ renderItem }) => {
  // Modal
  const [toggleModal, setToggleModal] = useState(false);

  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const highlight = isEnabled && {
    backgroundColor: globalColor.detailShadow,
    fontSize: 24,
  };

  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(renderItem));
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

      <View style={styles.spanContainer}>
        <Text style={[globalStyles.paragraph, styles.span]}>CBU</Text>
        <Text style={[globalStyles.paragraph, styles.rest]}>
          {renderItem.cbu}
        </Text>
      </View>

      <View style={styles.spanContainer}>
        <Text style={[globalStyles.paragraph, styles.span]}>Alias</Text>
        <Text style={[globalStyles.paragraph, styles.rest]}>
          {renderItem.alias}
        </Text>
      </View>

      <Text style={[globalStyles.paragraph, styles.rest]}>
        {renderItem.bank}
      </Text>

      {/* Modal */}
      <CustomModal
        openButtonText={"Borrar"}
        openStyle={[globalStyles.buttons, styles.buttonTrash]}
        openTextStyle={[globalStyles.buttonsText, styles.buttonTextTrash]}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      >
        <Text style={[globalStyles.paragraph, styles.modalText]}>
          ¿Quieres borrar el contacto de
          <Text style={styles.spanDelete}>
            {" "}
            {renderItem.name} {renderItem.lastname}{" "}
          </Text>
          de la agenda? Una vez hecho no se puede deshacer
        </Text>

        <TouchableOpacity
          onPress={handleDeleteContact}
          style={[globalStyles.buttons, styles.buttonTrash]}
        >
          <Text style={[globalStyles.buttonsText, styles.buttonTextTrash]}>
            borrar contacto
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: globalColor.highShadow,
    borderRadius: 20,
    elevation: 3,
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
    fontWeight: "bold",
    color: globalColor.midShadow,
  },
  spanDelete: {
    fontWeight: "bold",
  },
  spanContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buttonTrash: {
    backgroundColor: globalColor.error,
    width: "40%",
    opacity: 0.8,
    marginTop: 30,
  },
  buttonTextTrash: {
    color: globalColor.white,
    textAlign: "center",
  },
  modalText: {
    color: globalColor.lowDark,
    fontSize: 16,
  },
});
