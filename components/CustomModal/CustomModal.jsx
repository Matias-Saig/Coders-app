import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
const CustomModal = ({
  children,
  closeStyle,
  openStyle,
  openText,
  openTextStyle,
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        visible={toggleModal}
        onRequestClose={() => {
          Alert.alert("Regresando a pantalla anterior");
          setToggleModal(!toggleModal);
        }}
      >
        <View style={styles.centered}>
          <View style={styles.modalContainer}>
            {children}

            <Pressable
              style={styles.buttonClose}
              onPress={() => setToggleModal(!toggleModal)}
            >
              <Text style={closeStyle}> ← </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={openStyle} onPress={() => setToggleModal(true)}>
        <Text style={openTextStyle}>{openText}</Text>
      </Pressable>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "olive",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
    height: 200,
  },
});
