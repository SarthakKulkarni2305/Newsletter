import { StyleSheet, Text, View , Image , TouchableOpacity , TextInput , Alert } from 'react-native';
import React, { useState } from 'react';

import  * as Constants from '../src/ConstantUrlMedia';

export default function LoginScreen() {

    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const onPressButton = () => {
    if (inputValue) {
    
     Alert.alert('Thanks for subscribing,stay tuned!' );
     // Alert.alert('Button Pressed', 'Input value: ' + inputValue, [{ text: 'OK', onPress: () => {} }]);
   
    }
  };
  return (
  <View style={styles.container}>

                        <Image
                                        source={{ uri: Constants.Export_Loginscreen }}
                                        style={styles.backgroundImage}
                            />
                 
                    <Text style={styles.Text_Lemon}>Subscribe to our newsletter for our latest delicious recipes! </Text>



                    <View style={styles.input_TextInput}>
                                    
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleInputChange}
                                            value={inputValue}
                                            placeholder="Type your email"
                                        />
                                        <TouchableOpacity
                                            style={[styles.button, inputValue ? styles.activeButton : styles.disabledButton]}
                                            onPress={onPressButton}
                                            disabled={!inputValue}
                                        >
                                            <Text style={styles.buttonText}>Submit</Text>
                                        </TouchableOpacity>

                    </View>
        
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  backgroundImage: {
    width: 96, 
    height: 108, 
    resizeMode: 'cover', 
    marginTop:20,
  },
  Text_Lemon:{
    fontSize: 20,
    textAlign: 'center',
    marginTop:30,
    marginLeft:'10%',
    marginRight:'10%',
  },
  input_TextInput:{
    width:'80%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#40524c',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  activeButton: {
    backgroundColor: '#40524c',
  },
  disabledButton: {
    backgroundColor: '#b7b7b7',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },


});
