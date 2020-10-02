import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.logo}>
        <Image
          source={require('../../../assets/Nubank_Logo2.png')}
          style={styles.logo}
        />
      </View>

<View style={styles.view}>
  

      <Text style={styles.Text1}>Seu Aparelho</Text>
      <Text style={styles.Text2}>Apple (Iphone)</Text>
      <Text style={styles.Text3}>não está autorizado</Text>
      <Text style={styles.Text4}>Neste caso precisamos de uma foto sua (selfie),segurando seu RG ou CNH</Text>
                   
      <Image style={styles.img} source={require('../../../assets/camera.png')}/>
             

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>ABRIR CÂMERA</Text>
        </TouchableOpacity>
        


      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
    alignItems: 'center',

  },
  logo: {
    marginTop: 30,
  },
  view:{alignItems: 'center',
  padding: 20,
  backgroundColor: '#FFF',
  marginHorizontal: 20,
  borderRadius: 5,
  marginTop: 30,
  fontSize: 14,
   },

   text1: {},

   Text2: {fontWeight: 'bold',

   },
   Text3: { color: 'red' },
   Text4: { alignSelf: 'center',
   marginVertical:20,
   textAlign:'center',
},


  btn: {backgroundColor: '#fff',
  paddingHorizontal: 70, 
  paddingVertical: 20, 
  borderRadius: 5,
  marginTop: 40,
  borderColor: '#8A05BE',
  borderWidth: 1,
  marginBottom: 40,

  }, 
  btnText: {
    fontWeight: 'bold',
    color: '#8A05BE', 
    fontSize: 18,
  },


});
