import { StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import HomeCard from "../components/HomeElements/HomeCard";
import HomeButton from "../components/HomeElements/HomeButton";
import HomeDisplay from "../components/HomeElements/HomeDisplay";
import HomeButtonCard from "../components/HomeElements/HomeButtonCard";
import { globalColor } from "../global/globalStyles";
import { useGetUserQuery } from "../app/Service/userAccountApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {

  const user = useSelector((state) => state.auth);
  const {data:session} = useGetUserQuery(user.localId)
  const [isSession, setIsSession] = useState("")

  useEffect (()=>{

    if (session) {
      setIsSession(session)
    }
  }, [session])

  return (

    <View style={styles.containerSup}>
    
   {  isSession ? <>
      <Subtitle>Hola {session.profile.name}</Subtitle>

      <HomeDisplay balance={session.balance}/>

      <View style={styles.container}>
        <HomeButton refer="credit">Ingresar Retirar</HomeButton>
        <HomeButton refer="swap">Transferir</HomeButton>
        <HomeButton refer="credit-card">Crédito</HomeButton>
        <HomeButton refer="wallet">Inversiones</HomeButton>
      </View>

      <HomeButtonCard />

      <View style={styles.containerColumn}>
        <Text style={styles.subtitle}>MOVIMIENTOS</Text>

<Text>{session.movements[0].category}</Text>
<Text>{session.movements[0].date}</Text>
<Text>{session.movements[0].detail}</Text>
<Text>{session.movements[0].value}</Text>
{/* 
        <HomeCard detail="Supermercado A" coinNumber={20142} coinSpan={99} />
 */}
      </View>
      </> : <Text>Cargando datos</Text>
      }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical:20
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
