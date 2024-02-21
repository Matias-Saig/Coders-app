import { Pressable, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import HomeCard from "../components/HomeElements/HomeCard";
import HomeButton from "../components/HomeElements/HomeButton";
import HomeDisplay from "../components/HomeElements/HomeDisplay";
const Home = () => {
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

      <View styles={styles.container}>
      
      <HomeButton refer="card">Tarjetas</HomeButton>
      </View>

      <View style={styles.containerColumn}>
        <Text style={styles.subtitle}>Movimientos</Text>

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
});
