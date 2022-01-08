import React from 'react'
import {View, TextInput , Button , ActivityIndicator , Text , StyleSheet, TouchableOpacity , Image} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import {CheckBox} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker'
import RadioForm , {RadioButton , RadioButtonInput , RadioButtonLabel} from 'react-native-simple-radio-button'; 
import { ScrollView } from 'react-native-gesture-handler';
import icons from 'react-native-vector-icons'
import ImagePicker from 'react-native-image-crop-picker';

var field = [
   {label : "Computer" , value : 0},
    {label : "ICT" , value : 1},
    {label : "EC" , value : 2}
]
    


class form extends React.Component{
    constructor()
    {
        super();
        this.state = {
            name : '',
            email : '',
            password : '',
            showMe : false,
           isVisible : false,
           //imageUri : '',
           checked : false,
           checked1 : false,
           checked2 : false,
           checked3 : false,
           imageUri : null,
            
        }
    }

    openCamera = () =>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          this.setState({
            imageUri : image.path
          })
          //navigation.setParams({imageUri:imageUri})
        });
        }

        openGallery = () =>{
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true
            }).then(image => {
              this.setState({
                imageUri : image.path
              })
              //navigation.setParams({imageUri:imageUri})
            })
          
           
            }
          
          
          

  validate_field = () =>{
      const { username , password} = this.state
      if(username == ""){
          alert("please fill username")
          return false
      }else if(password == ""){
        alert("please fill password")
        return false
    }
    else{
        return true
    }
  }



   make_call = () => {
        
    if(this.validate_field()){
        this.setState({showMe : true})
        
        setTimeout(() => {
            this.setState({showMe : false})
            alert("successfull")
        }, 5000)

        
           
       }
   }
    
    handlePicker = () => {
        this.setState({
            isVisible : false
        })
    } 

    hidePicker = () => {
        this.setState({
            isVisible : false
        })
    }
    
    showPicker = () => {
        this.setState({
            isVisible : true
        })
    }
   
    
    
    render() {
        return(
            
             <View style = {{backgroundColor : 'pink'}}>
                 <ScrollView>

                 <TextInput
                 placeholder='Enter Name'
                onChangeText={(text) => this.setState({username : text})}
                style = {{borderWidth : 2 , borderColor : 'black' , margin : 20 , textShadowColor : 'black'}}></TextInput>

                <TextInput style = {styles.text}
                placeholder='Enter Email'
                onChangeText={(text) => this.setState({email : text})}
                style = {{borderWidth : 2 , borderColor : 'black' , margin : 20 , textShadowColor : 'black'}}></TextInput>

                <TextInput style = {styles.text}
                placeholder='Enter Password'
                keyboardType='numeric'
                maxLength={8}
                secureTextEntry = {true}
                onChangeText={(text) => {this.setState({password : text})}}
                style = {{borderWidth : 2 , borderColor : 'black' , margin : 20 , textShadowColor : 'black'}}></TextInput>
                <View style = {{backgroundColor : 'white'}}>
                    <Text style = {{fontSize : 20 , color : "orange" , fontWeight : 'bold' , justifyContent : 'center' , alignSelf : 'center'}}>Choose your respected Field</Text>
                    <RadioForm
                        radio_props = {field}
                        initial = {0}
                        buttonSize = {10}
                        buttonOuterSize = {20}
                        selectedButtonColor = {"darkgreen"}
                        selectedLabelColor = {"darkgreen"}
                        onPress = {(value) => {}}
                        />
                </View>
               
                <View style = {{backgroundColor : 'green'}} >
                <Text style = {{fontSize : 20 , color : "orange" , fontWeight : 'bold' , justifyContent : 'center' , alignSelf : 'center'}}>Choose your expertise</Text>
                <Picker
                    style = {styles.picker}
                    selectedValue = {this.state.pickervalue}
                    onValueChange={(itemValue, itemIndex) => this.setState({pickervalue : itemValue})}>
                        <Picker.Item label = "JavaScript" value = " javascript "/>
                        <Picker.Item label = "Java" value = " java "/>
                        <Picker.Item label = "C#" value = " C# "/>

                </Picker>
                </View>
               
                                
                <View style = {{backgroundColor : "black"}}>
                    <Text style = {{fontSize : 20 , color : "yellow" , justifyContent : "center" , alignItems : "center" , alignSelf : "center" }}>Choose your Hobby</Text>
                    <CheckBox 
                    title = 'Running'
                    checked = {this.state.checked}
                    onPress= {() => this.setState({checked : true})}/>
                    <CheckBox 
                    title = 'Singing'
                    checked = {this.state.checked1}
                    onPress= {() => this.setState({checked1 : true})}/>

                    <CheckBox 
                    title = 'Dancing'
                    checked = {this.state.checked2}
                    onPress= {() => this.setState({checked2 : true})}/>
                    <CheckBox 
                    title = 'Reading'
                    checked = {this.state.checked3}
                    onPress= {() => this.setState({checked3 : true})}/>
                </View>
                
                <TouchableOpacity style = {styles.button}  onPress = {this.showPicker}>
                     <Text style = {{justifyContent : "center" , alignSelf : "center"}}>
                         Date Time Picker
                     </Text>
                 </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode = {'datetime'}
                    is24Hour = {true}
                />

                    <Button title = "Open Camera" onPress = {() => 
                        this.openCamera()
                        }/>
                        <Image 
                        source = {{uri : this.state.imageUri}}/>

                    <Button title = "Open gallery" onPress = {() => 
                        this.openGallery()
                        }/>
                        <Image 
                        source = {{uri : this.state.imageUri}} style = {{height : 300 , width : 300 , borderColor : 'white'}}/>

                {
                    this.state.showMe &&
                    <ActivityIndicator 
                    size="large" color="#0066CC" 
                    />
                 }
               
                <Button title = "Submit" onPress = {() => this.make_call()} /> 
                
                         

                 </ScrollView>
                
                
               
            </View>
           
        )
    }
}



const styles = StyleSheet.create({
    picker :{
        width : 300,
        height : 45,
        borderColor : 'blue'  ,
        borderWidth : 5,
        backgroundColor : "blue",
        alignSelf : 'center'
    },
    button : {
        width : '100%',
        height : 50,
        borderRadius : 20,
        marginTop : 15 ,
        backgroundColor : "blue",
        justifyContent : 'center'

    },
    texts :{
        width : 300,
        height : 45,
        borderColor : 'red'  ,
        borderWidth : 5,
        color : "#e91e63",
        backgroundColor : "grey",
        fontSize : 20
    },
})
export default form