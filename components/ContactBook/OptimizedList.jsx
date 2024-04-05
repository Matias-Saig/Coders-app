import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import { globalColor } from "../../global/globalStyles";
import useContactsGet from "../../Hooks/useContactsGet";

const OptimizedList = ({ navigation }) => {
  const { contacts, isError, isLoading, isFetching } = useContactsGet();

  return (
    <SafeAreaView style={styles.list}>
      {isError && (
        <Text style={[styles.text, styles.error]}>Error de carga</Text>
      )}

      {isLoading || isFetching ? (
        <Text style={[styles.text, styles.loading]}>Cargando datos...</Text>
      ) : (
        <>
          {/* <AddContact contacts={contacts} navigation={navigation} /> */}
          <FlatList
            data={contacts}
            renderItem={({ item }) =>
              item !== null ? <ContactDetail renderItem={item} /> : null
            }
            keyExtractor={(item) => (item != null ? item.id : Math.random())}
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
    height: "100%",
    paddingBottom: 150,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  loading: {
    color: globalColor.alert,
  },
  error: {
    color: globalColor.error,
  },
});
