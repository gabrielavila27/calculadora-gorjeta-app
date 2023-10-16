import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text,  StyleSheet, Image, StatusBar, TextInput, Alert} from 'react-native';

export default function CalculadoraGorjeta() {
  const[gorjeta, setGorjeta] = useState('');
  const[total, setTotal] = useState('')
  const[valorGorjeta,setValorGorjeta] = useState('');
  const[valorConta, setValorConta] = useState('')

  const inputConta = (vc) => {setTotal(vc)};
  const inputGorjeta = (vg) => {setGorjeta(vg)}

  let calculoConta = () => {
    if(gorjeta == '' || total == ''){
    alert('Você deve inserir o valor da conta e a porcentagem da gorjeta antes de prosseguir com o cálculo.')
  }else{
    const vc = Number(total);
    const pg = Number(gorjeta);
    const calculo = (vc*(100+pg))/100;
    setValorGorjeta(`Valor da gorjeta: R$${(calculo - vc).toFixed(2)}`)
    setValorConta(`Total a pagar: R$${calculo.toFixed(2)}`);
  }
  }

  let limpar = () => {
    setTotal('');
    setValorGorjeta('');
    setGorjeta('');
    setValorConta('');
  }

 return (
   <SafeAreaView style = {styles.Container}> 

    <StatusBar style={styles.statusBar}/>

    <Text style = {styles.TextoTitulo}> 
      Calculador de gorjetas 
    </Text>

    <Image style = {styles.Imagem} source = {require('./src/images/poteDinheiro.png')} />

      <TextInput style = {styles.TextoInput} placeholder='Valor da conta...' placeholderTextColor={'#00000066'} value={total}
       keyboardType='decimal-pad' onChangeText={inputConta}>

      </TextInput>

      <TextInput style = {styles.TextoInput} placeholder = 'Porcentagem da gorjeta...' placeholderTextColor={'#00000066'} value={gorjeta}
       keyboardType='decimal-pad' onChangeText={inputGorjeta}> 

      </TextInput>

    <TouchableOpacity  style = {styles.Botao} onPress={calculoConta}>
      <Text  style = {styles.TextoBotao}>
        Calcular Gorjeta
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.Botao} onPress={limpar}>
      <Text  style = {styles.TextoBotao}>
        Calcular Novamente
      </Text>
    </TouchableOpacity>

    <View style={styles.ViewRes}>
      <Text  style = {styles.TextoRes}>
        {valorGorjeta}
      </Text>

      <Text  style = {styles.TextoRes}>
        {valorConta}
      </Text>
    </View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#017349'
  },
  statusBar:{
    //backgroundColor: '#f2e5'
  }, 
  TextoTitulo:{
    fontSize: 30,
    fontWeight: '700',
    color: '#F2B31B',
    marginTop: '10%'
  },
  Imagem: {
    resizeMode: 'contain',
    width: '50%',
    height: '30%',
    marginTop: '7%',
    marginBottom: '2%'
  },
  TextoInput: {
    backgroundColor: '#F2B31B',
    color: '#000000',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 150,
    width: '70%',
    height: '7%',
    paddingLeft: '5%',
    marginTop: '5%'
  },
  Botao: {
    backgroundColor: '#F2B31B',
    width: '60%',
    height: '7%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  TextoBotao:{
    fontSize: 19,
    fontWeight: '600'
  },
  ViewRes:{
    
  },
  TextoRes:{
    fontSize: 20,
    fontWeight: '700',
    marginTop: '5%',
    color:'#C51BF2'
  },
})