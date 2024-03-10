import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import { useGetContactListQuery } from "../../app/Service/userContactsApi";
// import { useSelector } from "react-redux";

const OptimizedList = ({ navigation }) => {
  // const contacts = useSelector((state) => state.contacts);

  const { data: contacts, isLoading, isError, error } = useGetContactListQuery();

  if (isError) console.log("error de",error);

  return (
    <SafeAreaView style={styles.list}>
      {isError && (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 48,
            color: "tomato",
          }}
        >
          Error de carga
        </Text>
      )}

      {isLoading ? (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 48,
            color: "aqua",
          }}
        >
          Cargando datos
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
});
