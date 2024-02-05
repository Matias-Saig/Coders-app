import { StyleSheet, Text, View } from 'react-native'
const ContactDetail = ({renderItem}) => {
return (
        <View>
          <Text>{renderItem.id}</Text>
          <Text>{renderItem.name}</Text>
          <Text>{renderItem.lastname}</Text>
          <Text>{renderItem.nickname}</Text>
          <Text>{renderItem.bank}</Text>
          <Text>{renderItem.cbu}</Text>
          <Text>{renderItem.alias}</Text>
        </View>
      );
 
}

export default ContactDetail

const styles = StyleSheet.create({})