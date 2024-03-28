import { FlatList, SafeAreaViewBase, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import HomeCard from "../components/HomeElements/HomeCard";
import HomeButton from "../components/HomeElements/HomeButton";
import HomeDisplay from "../components/HomeElements/HomeDisplay";
import HomeButtonCard from "../components/HomeElements/HomeButtonCard";
import { globalColor } from "../global/globalStyles";
import useSessionGet from "../Hooks/useSessionGet";

const Home = () => {
  const { isLoading, session } = useSessionGet();

  console.log(session);
  return (
    <View style={styles.containerSup}>
      {!isLoading ? (
        <>
          <Subtitle>Hola {session?.profile?.name}</Subtitle>

          <HomeDisplay balance={session?.balance} />

          <View style={styles.container}>
            <HomeButton refer="credit">Ingresar Retirar</HomeButton>
            <HomeButton refer="swap">Transferir</HomeButton>
            <HomeButton refer="credit-card">Crédito</HomeButton>
            <HomeButton refer="wallet">Inversiones</HomeButton>
          </View>

          <HomeButtonCard />

          <View style={styles.containerColumn}>
            <Text style={styles.subtitle}>MOVIMIENTOS</Text>

              <FlatList
                data={session?.movements}
                renderItem={({ item }) => 
                  <>
                    <Text>{item.cashFlow}</Text>
                    <Text>{item.category}</Text>
                    <Text>{item.date}</Text>
                    <Text>{item.detail}</Text>
                    <Text>{item.price}</Text>
                  </>
                }
                keyExtractor={(item) => item.detail}
              />

            {/* 
        <HomeCard detail="Supermercado A" coinNumber={20142} coinSpan={99} />
 */}
          </View>
        </>
      ) : (
        <Text>Cargando datos</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 20,
  },

  container: {
    flexDirection: "row",
    gap: 5,
  },

  containerColumn: {
    alignItems: "center",
  },

  subtitle: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: globalColor.highShadow,
    width: "100%",
    paddingBottom: 3,
    marginVertical: 10,
  },
});
