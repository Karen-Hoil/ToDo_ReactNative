import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Touchable, TouchableOpacity, Keyboard } from 'react-native';
import Tareas from './components/tareas';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.container}>
      {/* titulo */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas Pendientes</Text>
      </View>

      {/* tareas */}
      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key= {index} onPress={() => completeTask()}>
                <Tareas  text= {item}/>
              </TouchableOpacity>
              
            ) 
          })
        }
        {/* <Tareas text={"Tarea 1"} />
        <Tareas text={"Tarea 2"} /> */}
      </View>

      {/* crear tareas */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Escribe una tarea"} value={task} onChangeText={text => setTask(text)}
        />

        {/* agregar boton de agregar tarea */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    margin:15,
    marginTop:30
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: '#E0B9FE',
    borderRadius: 60,
    borderColor: '#A990BD',
    borderWidth: 1,
    width: 250

  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#E0B9FE',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A990BD',
    borderWidth: 1
  },
  addText:{
    fontSize: 30
  }
});
