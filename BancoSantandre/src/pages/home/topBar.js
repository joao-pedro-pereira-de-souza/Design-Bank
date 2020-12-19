import React,{useState , useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MapView from 'react-native-maps';
import { View , Text }  from 'react-native';
import styles from './styles';
import {stylesFill , Colors , WidthScreen , HeightScreen} from '../../styles'

import { Entypo , FontAwesome , MaterialIcons , MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import CardSquad from '../../components/CardSquad'

import CardRectangle from '../../components/CardRectangle';

const options = () =>{

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
          title:'Pagar Conta',
          description:'pague a suas contas de forma rápida.',
          Icon:FontAwesome,
          nameIcon:'qrcode'
    
      },
      {
          id:3,
          bg:'#3498db',
          title:'Semanal',
          description:'Verifique o andamento do seu dinheiro na semana.',
          Icon: MaterialIcons,
          nameIcon:'date-range'
    
      },
    
      {
        id:4,
        bg:'#9b59b6',
        title:'Gráfico',
        description:'Verifique o andamento do seu dinheiro',
        Icon: Entypo,
        nameIcon:'area-graph'
    
    },
    
    {
        id:5,
        bg:'#f1c40f',
        title:'Poupança',
        description:'Faça o seu dinheiro render',
        Icon: MaterialCommunityIcons,
        nameIcon:'home-currency-usd'
    
    },
    {
        id:6,
        bg:'#e67e22',
        title:'Recarga',
        description:'Recarregue Seu Pré no Site e Receba Seus Créditos na Hora. Recarga Rápida e Segura.',
        Icon:MaterialIcons,
        nameIcon:'phone'
  
    },
      
      ]

      return(
        
        <View style={styles.containerGrid }>
            
               <View>

                {OptionsCards.map((props ,index) =>{

                if(index == 0 || index == 3 ){

                return(
                    
                        <CardSquad  {...props} />

                )
                
                }
                else if (index ==2){

                return(
                    
                    <CardRectangle {...props} />
                    
                )

                }
                })}

                </View>

                <View>

                {OptionsCards.map((props ,index) =>{

                if(index == 1 || index == 5 ){

                    return(
                    
                    <CardRectangle {...props} />
                    
                    )
                    
                }else if(index == 4){

                    return(
                        <CardSquad {...props} />
                    )

                }

                })}

                </View>

       </View>

      )

}

import Header from '../../components/headerSearch/index'
import CardOptions from '../../components/CardOption/index'
const payments = () =>{

    const TomaOLog = () =>{
        console.log('já toma')
    }

    const reder = () =>{
      return(
        <View style={styles.styleList}>

        </View>
      )
    }

      return(  

        <View style={{padding: 10,}}>

            <View style ={{width:'100%', height:'100%', borderRadius:  HeightScreen * 0.02 / 2, marginTop:10, backgroundColor:'#fff' ,padding: 20, }}>

               <CardOptions IconArrow={true} name='Pagamentos' colorIcon={Colors.color} event={TomaOLog}/>
               
               <CardOptions IconArrow={true} name='Transferência' colorIcon={Colors.color}/>
               
               <CardOptions IconArrow={true} name='Atividades' colorIcon={Colors.color}/>

            </View>

        </View> 
      
      )

}

const points = () =>{

  const [location , setLocation] = useState(null)

  useEffect(() => {
    
    (async () => {

      navigator.geolocation.getCurrentPosition(

        ( { coords:{latitude , longitude} } ) =>{
      
            setLocation({
              latitude,
              longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134

            })
      
        }, // Certo
      
        () => {}, //erro
        {
          timeout:2000,
          enableHighAccuracy:true,
          maximumAge:1000
        }
      
      )
    
    })();
  }, []);

    return(

      <>
      
        <View style={{marginTop:10, width:'90%' , alignSelf:'center',position:'absolute', zIndex:2}}>

           <Header/>

        </View>

        <MapView
             style={{flex:1}}
            region={{latitude:-23.6982771,longitude:-46.6484508, latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
}}
            showsUserLocation={true}
            loadingEnabled
            scrollEnabled={false}
            
        />

        </>
    )
}

const TopBar = createMaterialTopTabNavigator();

const RoutesTop = () => {
  return (

    <NavigationContainer independent={true} style={{flex:1, backgroundColor:'#fff'}}>

        <TopBar.Navigator style={{height:600}} tabBarOptions={{labelStyle: [stylesFill.label , {fontSize:14}], activeTintColor: Colors.color, style:{ elevation:0,margin:10}, indicatorStyle:{backgroundColor:Colors.redLight, height:4, borderRadius:2}}}>

            <TopBar.Screen name='options' component={options} options={{title:'Opções'}}/>
            <TopBar.Screen name='friends' component={payments} options={{title:'Hitórico' }}/>
            <TopBar.Screen name='points' component={points} options={{title:'Caixas'}}/>
        </TopBar.Navigator>

    </NavigationContainer>

  );
}

export default RoutesTop;