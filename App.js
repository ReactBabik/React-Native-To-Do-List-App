import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback,
Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Home from './screens/home';
import About from './screens/about';
import Sandbox from './components/sandbox'
import {Picker} from '@react-native-community/picker'
//import Navigator from './routes/homeStack';

export default function App() {

  
  // const [name, setName] = useState('Dio');

  // const clickHandler = () => {
  //   if(name == 'Dio') {
  //   setName('Jotaro');
  //   }
  //   else {
  //     setName('Dio');
  //   }
  // }

  const [selectedValue, setSelectedValue] = useState("first");


  <Navigator/>

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

  if(text.length > 3)
  {

      setTodos ((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
  }
  else {
    Alert.alert('OOPS! ','To do name must be greater than 3 characters long.', [
      {text: 'Understood', onPress: () => console.log('Alert closed.')}
    ]); 
  }
}

  const [Todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'play ac4', key: '2'},
    {text: 'buy coffee (again)', key: '3'}
  ])

  return (
    // <ScrollView style = {styles.scrollScreen}>
    //   <View style={styles.container}>
    //     <Text style = {styles.normalText}>Name is {name}</Text>
    //     <TextInput style = {styles.inputArea}
    //     placeholder = 'e.g. John'
    //     placeholderTextColor = "#F5FFFA"
    //     onChangeText = {(val) => setName(val)}
    //     autoCorrect = {true}/>
    //   </View>
    //     <TouchableOpacity style = {styles.buttonStyle}
    //     activeOpacity = { .5 }
    //     onPress = {clickHandler} >
    //       <Text style = {styles.customBtnText}>UPDATE STATE</Text>
    //     </TouchableOpacity>
    //     <StatusBar style="auto" />
    // </ScrollView>

    //            DiFFERENT CONTENT BELOW

    <TouchableWithoutFeedback onPress = {() => {
      
      Keyboard.dismiss();
      
    }}>
      <View style = {styles.container}>
        <Header />
        
        <View style = {styles.content}>
          <AddTodo submitHandler = {submitHandler}/>
            <View style = {styles.list}>
              <FlatList
                data = {Todos}
                renderItem = {({ item }) =>(
                <TodoItem item = {item} pressHandler = {pressHandler}/>
                
                )} 
              />
              

            </View>
            <Picker
            mode = "dropdown"
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            //itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
            >
          <Picker.Item label="First Item" value="first" />
            <Picker.Item label="Second Item" value="second" />
            </Picker> 
        </View>
       
      </View>  
      
    </TouchableWithoutFeedback>   
    
    //          DIFFERENT CONTENT BELOW

    //<Sandbox />

  );
} // App function ends 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF8362",
    alignSelf: 'center',
    padding: 10,
    borderRadius: 15,
    width: 200,
    margin: 10,
  },
  inputArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'gray',
    textAlign: 'center',
    borderRadius: 3,
     
  },
  scrollScreen: {
    flex: 1,
    backgroundColor: '#444444'
  },
  normalText: {
    color: 'white',
    flex: 1,
    fontSize: 10,
    fontWeight: '300',
  },
  customBtnText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: "#fff",
    textTransform: "uppercase",
  },
  content: {
    flex: 1,
    padding: 40
    },
    list: {
      flex: 1,
      marginTop: 20,
    }
});
