import React , {useState} from 'react'
import {View, Text , FlatList , StyleSheet , TouchableOpacity} from 'react-native'

const Flat_List = ({navigation}) => {
    const [People , setPeople] = useState([
        {name : 'john' , id : '1'},
        {name : 'Roy' , id: '2'},
        {name : 'Marcus' , id : '3'},
        {name : 'Mathew' ,id : '4'},
        {name : 'Ropson' , id : '5'},
    ])

    

    return(
        <View style = {styles.main}>
            <View style = {{backgroundColor : 'white' , width : '100%' , justifyContent : 'center'}}>
                <Text style = {{fontWeight : 'bold' , fontSize : 30 , color : 'black'}}>
                    List of People
                </Text>
            </View>
            <FlatList
            keyExtractor = {(item) => item.id} 
            data = {People}
            renderItem = {({ item }) => {
                return(
                <TouchableOpacity onPress={ () => navigation.navigate('Form')}>
                    <Text style = {styles.text}>{item.name}</Text>
                </TouchableOpacity>
                )
            }
               
               

            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        backgroundColor : 'blue',
        height : '25%',
        width : '100%',
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

export default Flat_List