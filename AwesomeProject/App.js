import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] =useState("")
  const [courseGoals, setCourseGoals] =useState([])

function goalInputHandler(enteredText){
  setEnteredGoalText(enteredText)
}

function addGoalhandler(){
// console.log(enteredGoalText) we can directly get the value once we click on button but since the data will change we have to make another hook to store the value 
// setCourseGoals([...courseGoals, enteredGoalText])
// best practice for this would be 
setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, enteredGoalText])

}

  return (
   <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your Course Goal" onChangeText={goalInputHandler}/>
      <Button  title="Add Goal" onPress={addGoalhandler}/>
    </View>
    <View style={styles.goalsContainer}>
      {/* <Text>List of goals....</Text> */}
      {courseGoals.map((goal)=><Text>{goal}</Text>)}
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
 paddingTop:50,
 paddingHorizontal:16

  },
  inputContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:"#ccccc",
    marginBottom:24,
  },
  textInput:{
    borderWidth:1,
    borderColor:"#ccccc",
    width:"70%",
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:5,

  }

});
