import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Senha');
    }
        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../../assets/Nubank_Logo2.png')}
                        style={styles.logo}
                    />
                </View>

                <Text style={styles.loginText}>Faça seu login</Text>

                <View style={styles.input}>
                    <TextInput
                        placeholderTextColor="#FFF"
                        style={styles.inputText}
                        placeholder="Digite seu CPF" />

                    <TextInput
                        placeholderTextColor="#FFF"
                        style={styles.inputText}
                        placeholder="Digite sua senha" />
                </View>

                <View >
                    <TouchableOpacity style={styles.btn} onPress={onPress}>
                        <Text style={styles.btnText}>Continuar</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.esqueci} > Esqueci minha senha!</Text>
                    </View>

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

        input: {
            display: "flex", justifyContent: 'space-around', alignSelf: 'center', marginTop: 25, marginBottom: 20,
        },

        inputText: {
            borderBottomWidth: 1, borderColor: '#fff', padding: 30, margin: 10, width: 300, marginTop: 5,
        },
        loginText: {
            fontSize: 40,
            color: "white",
            marginTop: 60,
        },
        btn: {
            backgroundColor: '#fff',
            paddingHorizontal: 120,
            paddingVertical: 30,
            borderRadius: 5,
            marginTop: 10,

        },
        btnText: {
            fontWeight: 'bold',
            color: '#8A05BE',
            fontSize: 18,
        },
        esqueci: {
            fontWeight: 'bold',
            color: '#FFF',
            fontSize: 15,
            marginTop: 20,
            alignSelf: 'center',

        }




    });
