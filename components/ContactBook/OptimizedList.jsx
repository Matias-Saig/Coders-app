import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import { useGetContactListQuery } from "../../app/Service/userContactsApi";
import { globalColor } from "../../global/globalStyles";

const OptimizedList = ({ navigation }) => {

  const { data: contacts, isLoading, isError, error } = useGetContactListQuery();

  if (isError) console.log("error de",error);

  return (
    <SafeAreaView style={styles.list}>
      {isError && (
        <Text
          style={[styles.text, styles.error]}
        >
          Error de carga
        </Text>
      )}

      {isLoading ? (
        <Text
          style={[styles.text, styles.loading]}
        >
          Cargando datos...
        </Text>
      ) : (
        <>
          <AddContact contacts={contacts} navigation={navigation} />

          <FlatList
            data={contacts}
            renderItem={({ item }) => <ContactDetail renderItem={item} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
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
  text: {
    textAlign:"center",
    fontSize: 24,
  },
  loading: {
    color: globalColor.alert
  },
  error: {
    color: globalColor.error
  }

});
