import { Text } from "react-native";
import Icons from "./Icons";
import { globalColor, globalStyles } from "../../global/globalStyles";
const LoadingMsg = ({ text }) => {
  return (
    <>
      {text && (
        <Text style={[globalStyles.verification, globalStyles.msgLoading]} >
            <Icons
            refer="info-with-circle"
            size={16}
            color={globalColor.highDark}
            styleAdd={{ marginRight: 10 }}
          />
          {text}
        </Text>
      )}
    </>
  );
};

export default LoadingMsg;