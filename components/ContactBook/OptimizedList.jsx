import { FlatList, StyleSheet, View } from "react-native";
import { contactsList } from "../../global/contactList";
import ContactDetail from "./ContactDetail";
import { useState } from "react";


const OptimizedList = () => {

  const [contacts, setContacts] = useState(contactsList)

  


  /* 
  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id ))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }
 */

  

  return (
    <View  style={styles.list}>
    
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactDetail renderItem={item} 
        contacts={contacts} setContacts={setContacts}/>}
        keyExtractor={(item) => item.id}
      />
    
    </View>
  );
};

export default OptimizedList;

const styles = StyleSheet.create({
list: {
  marginVertical: 10,
  alignItems:"center"
}

});
