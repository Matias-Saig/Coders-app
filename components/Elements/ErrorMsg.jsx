import { Text } from "react-native";
import Icons from "./Icons";
import { globalColor, globalStyles } from "../../global/globalStyles";
const ErrorMsg = ({ error }) => {
  return (
    <>
      {error && (
        <Text style={globalStyles.verificationError}>
          <Icons
            refer="info-with-circle"
            size={16}
            color={globalColor.error}
            styleAdd={{ marginRight: 10 }}
          />
          {error}
        </Text>
      )}
    </>
  );
};

export default ErrorMsg;