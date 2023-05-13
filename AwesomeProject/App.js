
import { Button, StyleSheet, Text,View, FlatList } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

  
  const [courseGoals, setCourseGoals] =useState([])


function addGoalhandler(enteredGoalText){
// console.log(enteredGoalText) we can directly get the value once we click on button but since the data will change we have to make another hook to store the value 
// setCourseGoals([...courseGoals, enteredGoalText])
// best practice for this would be 
setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, {text:enteredGoalText, key:Math.random().toString()}])

}

  return (
   <View style={styles.container}>
 <GoalInput addGoalhandler={addGoalhandler}
 
 />
    <View style={styles.goalsContainer}>
      <FlatList  
      data={courseGoals} 
      renderItem={(itemData)=>{
        return
        <GoalItem text={itemData.item.text}/>
      }}
      alwaysBounceVertical={false}
      keyExtractor={(item, index)=>{
        return item.id
      }}
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
 
  goalsContainer:{
    flex:5,
  }

});
