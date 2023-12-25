import { StyleSheet, Text, View, Image , TouchableOpacity , Button } from 'react-native';

import  * as Constants from '../src/ConstantUrlMedia';


export default function WelcomeScreen() {
    const handlePress = () => {
        // Function to handle button press
        console.log('Sir t9awd hh');
        // You can perform any action here when the button is pressed
      };
  return (
  <View style={styles.container}>
    <View style={styles.Text_Lemon_View}>
       <View >
            <Image
                            source={{ uri: Constants.Export_Welcome }} // Replace with your image path
                            style={styles.backgroundImage}
                />
      </View>
      <View >    
           <Text style={styles.Text_Lemon}>Little Lemon, your local Mediterranean Bistro </Text>
     </View>
     </View>
     <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Newsletter</Text>
            </TouchableOpacity>
     </View>
      { /*<Button title="Newsletter" onPress={handlePress}   style={styles.buttonNewsletter}/>*/}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
   // backgroundColor: 'orange',
   // justifyContent: 'space-between',
  },
  
  backgroundImage: {
    width: 106, 
    height: 186, 
    resizeMode: 'cover', 
    backgroundColor:'red',
  },
  Text_Lemon:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:30,
    marginLeft:'10%',
    marginRight:'10%',
  },
  Text_Lemon_View:{
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView:{
    width:'80%',
    marginTop: 20,
   //backgroundColor:'red',
   //justifyContent: 'flex-end',
   flex: 0.1,
  },
  button:{
    backgroundColor:'#40524c',
    padding : 4,
   
    alignItems: 'center',
  
    borderRadius: 8,
   // flex: 1,
 
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
