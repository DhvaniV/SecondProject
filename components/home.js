import React from 'react'
import {View, Button , StyleSheet} from 'react-native'

const home = ({ navigation }) => {
    return(
        <View style = {{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
            <Button title = "ScrollView" style = {styles.button} onPress = {() => navigation.navigate('ScrollView')} />
            <Button title = "FlatList" style = {styles.button} onPress = {() => navigation.navigate('FlatList')} />
        </View>
    )
}
 const  styles = StyleSheet.create({
     button :{
         marginBottom : 20,
         padding : 30
     }
 })
export default home