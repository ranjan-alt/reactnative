
import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
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
setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, {text:enteredGoalText, key:Math.random().toString()}])

}

  return (
   <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your Course Goal" onChangeText={goalInputHandler}/>
      <Button  title="Add Goal" onPress={addGoalhandler}/>
    </View>
    <View style={styles.goalsContainer}>
      <FlatList  
      data={courseGoals} 
      renderItem={(itemData)=>{
        return(
       <View style={styles.goalItem}>
       <Text style={styles.goalText }>{itemData.item.text}</Text>
       </View>
        );
      }}
      alwaysBounceVertical={false}
      />
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
