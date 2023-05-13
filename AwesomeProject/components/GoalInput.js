import { View, TextInput, Button, StyleSheet } from "react-native/types"
import { useState } from "react"

function GoalInput(props){
    
    
    const [enteredGoalText, setEnteredGoalText] =useState("")

    function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
    }

    function addGoalhandler(){
        props.addGoalhandler(enteredGoalText)
        setEnteredGoalText("")
    }
    return(
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button  title="Add Goal" onPress={addGoalhandler}/>
      </View>
    )
}


const styles =StyleSheet.create({
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
})


export default GoalInput