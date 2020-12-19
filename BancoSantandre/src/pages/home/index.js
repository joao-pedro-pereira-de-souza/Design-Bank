import React,{useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler'
import { View , Text , Image , TouchableOpacity , FlatList , ImageBackground}  from 'react-native';
import styles from './styles';
import {stylesFill , Colors} from '../../styles'

import { Entypo , FontAwesome , MaterialIcons , MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import CardActividies from '../../components/CardActivities/index';

import {Activities} from '../../services/api';
import {useNavigation} from '@react-navigation/native'

import TopTab from './topBar'

const home = () => {

  const OptionsCards= [
    {
      id:0,
      bg:'#2ecc71',
      title:'Amigos',
      description:'lista de amigos',
      Icon: FontAwesome,
      nameIcon:'users'
    },
    {
      id:1,
      bg:'#1abc9c',
      title:'Recarga',
      description:'coloque créditos no seu chip e ganhe R$ 10',
      Icon:MaterialIcons,
      nameIcon:'phone'

  },
  {
      id:3,
      bg:'#3498db',
      title:'Semanal',
      description:'use o aplicativo durante uma semana e ganhe R$ 10 ',
      Icon: MaterialIcons,
      nameIcon:'date-range'

  },

  {
    id:4,
    bg:'#9b59b6',
    title:'Gráfico',
    description:'verifique o andamento do seu dinheiro',
    Icon: Entypo,
    nameIcon:'area-graph'

},

{
  id:5,
  bg:'#f1c40f',
  title:'Poupança',
  description:'faça o seu dinheiro render',
  Icon: MaterialCommunityIcons,
  nameIcon:'home-currency-usd'

},
  
  ]
  
  const navigation = useNavigation();
  const [ref ,setRef] = useState(false)
  const [textbool , setTextBool] = useState(false)

const TextActivities = () =>{
  if(textbool){

    return(
      <Text style={[ stylesFill.label , {color: Colors.color, alignSelf:'center'}]}>Sem Atividadea</Text>
    )

  }
  else{

    return (<View/>)

  }
}


  return (

      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}} >

          <ImageBackground source={require('../../assets/bgTop.png')} style={{width:'100%' ,height:240}} >
            
          <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.openDrawer()}>
            
            <Entypo name="menu" size={30} color={Colors.color} />

            </TouchableOpacity>

            <View style={styles.containerTopText}>

              <Text style={[stylesFill.title , {fontSize:40, color:'#fff'}]}>Saldo</Text>

              <View style={{flexDirection:'row'}}>

                <Text style={[stylesFill.label , { color:'#fff' , marginRight:10 , fontSize:20}]}> R$ 00,00</Text>

                <TouchableOpacity>

                  <Feather name="eye" size={24} color="#fff" />

                </TouchableOpacity>

              </View>
            
            </View> 

            <View style={{marginTop:20 , marginRight:30 , flexDirection:'row' , position:'absolute', right:0}}>

                  <Image style={{width:30 , height:30 , borderRadius:30 / 2, backgroundColor:'#fff'}}>

                  </Image>

                  <View style={{marginLeft:10}}>
                      <Text style={[ stylesFill.label , {color:'#fff'}]}>Name</Text>
                      <Text style={[ stylesFill.labelDesc , {color:'#fff'}]}>nível</Text>
                  </View>

              </View>
                  
          </ImageBackground>
        
          <Text style={[stylesFill.title , {color:Colors.color , marginLeft:20}]}>Atividades</Text>

          <FlatList 

            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={{padding:15}}
            data={Activities}
            extraData={ref}
            keyExtractor={(item , index) => String(index)}
            
            renderItem={ props => 
            <CardActividies {...props} 
            getRef={setRef} 
            getText ={setTextBool} 
            /> }/>

          <TextActivities/>
          
          <TopTab />

      </ScrollView>
    
  );
}

export default home;