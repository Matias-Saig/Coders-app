import { Pressable, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import Icons from "../components/Elements/icons";
import { globalColor } from "../global/globalStyles";
const Home = () => {
  return (
    <>
        <View style={styles.container}>
          <Icons refer={"user"} size={24} color={globalColor.midDark} />
          <Subtitle>Hola Invitado</Subtitle>
        </View>

      <View style={styles.container}>
      <Text style={styles.subtitle}>Dinero disponible</Text>
        <Text style={styles.saldo}>$1234</Text>
        <Text style={styles.saldoSpan}>56</Text>
      </View>
      

      <View style={styles.container}>
        <Pressable disabled style={styles.buttonStructure}>
          <Text style={styles.buttonStructureText}>Ingresar</Text>
        </Pressable>
        <Pressable disabled style={styles.buttonStructure}>
          <Text  style={styles.buttonStructureText}> Retirar</Text>
        </Pressable>
        <Pressable disabled style={styles.buttonStructure}>
          <Text style={styles.buttonStructureText}> Transferir</Text>
        </Pressable>
        <Pressable disabled style={styles.buttonStructure}>
          <Text  style={styles.buttonStructureText}> Crédito</Text>
        </Pressable>
        <Pressable disabled style={styles.buttonStructure}>
          <Text  style={styles.buttonStructureText}> Inversiones</Text>
        </Pressable>
      </View>

      <View styles={styles.container}>

      <Pressable disabled style={styles.buttonStructure}>
        <Text> Tarjetas </Text>
      </Pressable>
      </View>

      <View style={styles.containerColumn}>
        <Text style={styles.subtitle}>Movimientos</Text>

        <View styles={styles.container}>
          <Text>Detalles</Text>
          <View style={styles.container}>
            <Text style={styles.saldo}>$1234</Text>
            <Text style={styles.saldoSpan}>56</Text>
          </View>
        </View>

        <View styles={styles.container}>
          <Text>Detalles</Text>
          <View style={styles.container}>
            <Text style={styles.saldo}>$1234</Text>
            <Text style={styles.saldoSpan}>56</Text>
          </View>
        </View>

        <View styles={styles.container}>
          <Text>Detalles</Text>
          <View style={styles.container}>
            <Text style={styles.saldo}>$1234</Text>
            <Text style={styles.saldoSpan}>56</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: globalColor.highShadow,
    width: "80%",
    gap: 5,
  },
  saldo: {
    fontSize: 16,
  },
  saldoSpan: {
    fontSize: 10,
    textAlignVertical: "top",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonStructure: {
    flex: 1,
  },
  buttonStructureText: {
    fontSize:11,    
  }
});
