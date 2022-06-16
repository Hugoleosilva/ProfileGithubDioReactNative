import React from 'react';
import {
    View, 
    Image, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/103127576?v=4';

const urlToMyGithub = 'https://github.com/Hugoleosilva';

const App = () => {

const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
if(res){
    console.log('Link aprovado');
    console.log('Abrinfo link...');
  await Linking.openURL(urlToMyGithub);
}
};

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
      <View style={style.content}>
        <Image
           acessibilityLabel='Hugo na sala com parede branca'
           style={style.avatar} 
           source={{uri: imageProfileGithub}}
         />
<Text
acessibilityLabel='Nome: Hugo Leonardo'
style={[style.defaultText, style.name]}>HUGO LEONARDO LUIZ DA SILVA
</Text>
<Text
acessibilityLabel='Nickname: Hugoleosilva'
style={[style.defaultText, style.nickname]}>Hugoleosilva
</Text>
<Text 
acessibilityLabel='Descrição: Faço parte da primeira turma do Programa Impulso Tec para formação de Desenvolvedores Back End Jr. Em parceria com a AWS, ITAU, ACCENTURE, K2 e DESCOMPLICA. '
style={[style.defaultText, style.description]}>Faço parte da primeira turma do Programa Impulso Tec para formação de Desenvolvedores Back End Jr. Em parceria com a AWS, ITAU, ACCENTURE, K2 e DESCOMPLICA.
</Text>
<Pressable onPress={handlePressGoToGithub}>
<View style={style.button}>
    <Text style={[style.defaultText, style.textButton]}>
        Open in Github
    </Text>
</View>
</Pressable>
     </View>
    </SafeAreaView>
        );
};

export default App; 

const style = StyleSheet.create({
container: {
    backgroundColor: colorGithub,
    flex: 1, //Expandir para tela inteira
    justifyContent: 'center',
    alignItems: 'center',
},
content: {
    alignItems: 'center',
    padding: 20,
},    
avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
},
defaultText:{
    color: colorFontGithub,
},
name:{
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
},
nickname:{
    fontSize: 18,
    color: colorDarkFontGithub,
},
description:{
    fontWeight: 'bold',
    fontSize: 14,
},
button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},
textButton:{
    fontWeight: 'bold',
    fontSize: 16,
},    
});

