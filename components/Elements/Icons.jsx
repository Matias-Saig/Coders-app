import { AntDesign, Entypo } from "@expo/vector-icons";

const Icons = ({ ant, refer, size, color }) => {
  return (
    <>
      {ant ? (
        <AntDesign name={refer} size={size} color={color} />
      ) : (
        <Entypo name={refer} size={size} color={color} />
      )}
    </>
  );
};

export default Icons;
