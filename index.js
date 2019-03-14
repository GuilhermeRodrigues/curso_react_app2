//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () => {

    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    //frases
    var frases = Array();
    frases[0] = 'Prefiro morrer do que perder a vida.';
    frases[1] = 'Antes zero do que nada.';
    frases[2] = 'Se for desistir, desista de ser fraco.';
    frases[3] = 'Palmeiras não tem mundial!';
    frases[4] = 'Viva cada dia como se fosse o ultimo.';

    var fraseEscolhida = frases[numeroAleatorio];

    Alert.alert(fraseEscolhida);
}

//Criar o componente
const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={ principal }>

            <Image source={require('./imgs/logo.png')} />

            <TouchableOpacity 
                onPress={gerarNovaFrase}
                style={botao}>
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>

        </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
