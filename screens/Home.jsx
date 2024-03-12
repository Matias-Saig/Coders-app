import { StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import HomeCard from "../components/HomeElements/HomeCard";
import HomeButton from "../components/HomeElements/HomeButton";
import HomeDisplay from "../components/HomeElements/HomeDisplay";
import HomeButtonCard from "../components/HomeElements/HomeButtonCard";
import { globalColor } from "../global/globalStyles";
import { useSelector } from "react-redux";
const Home = () => {

  const user = useSelector(state => state.auth)
  console.log("usuario en home", user);
  
  return (
    <View style={styles.containerSup}>
      <Subtitle>Hola Invitado</Subtitle>

      <HomeDisplay />

      <View style={styles.container}>
        <HomeButton refer="credit">Ingresar Retirar</HomeButton>
        <HomeButton refer="swap">Transferir</HomeButton>
        <HomeButton refer="credit-card">Crédito</HomeButton>
        <HomeButton refer="wallet">Inversiones</HomeButton>
      </View>

      <HomeButtonCard />

      <View style={styles.containerColumn}>
        <Text style={styles.subtitle}>MOVIMIENTOS</Text>

        <HomeCard detail="Supermercado A" coinNumber={20142} coinSpan={99} />

        <HomeCard
          detail="Transferencia a NG"
          coinNumber={11480}
          coinSpan={12}
        />

        <HomeCard detail="Combustible" coinNumber={12345} coinSpan={56} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
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
