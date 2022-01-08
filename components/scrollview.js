import React from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'



function scrollview({navigation}) {
    return(
        <View>
            <ScrollView>
            <View style = {styles.main}>
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}> 
                    <Text style = {styles.text}>John</Text>
                </TouchableOpacity>

            </View>
            <View style = {styles.main}>
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}>
                    <Text style = {styles.text}>Roy</Text>
                </TouchableOpacity>
                

            </View>
            <View style = {styles.main}>
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}>
                    <Text style = {styles.text}>Marcus</Text>
                </TouchableOpacity>

            </View>
            <View style = {styles.main}>
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}>
                    <Text style = {styles.text}>Mathew</Text>
                </TouchableOpacity>

            </View>
            <View style = {styles.main}>
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}>
                    <Text style = {styles.text}>Ropson</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    main : {
        backgroundColor : 'blue',
        height : 200,
        width : 300,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 10,
    
    },

    text : {
        fontSize : 25,
        fontWeight : 'bold',
        color : 'white'

    }
})
export default scrollview