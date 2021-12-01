import React from "react"
import {View, Text, StyleSheet } from "react-native"


const ComponentScreen = () => {
    return (     <Text style={styles.textStyle}>Hello Component</Text> )
    
}

const styles = StyleSheet.create({ 

    textStyle: {
        fontSize:30,
    }
        
})

export default ComponentScreen;