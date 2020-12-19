import React from 'react';
import { View , Text , TouchableOpacity , Image, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator , DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import {stylesFill , Colors} from './styles'
import { AntDesign , MaterialCommunityIcons , Feather , MaterialIcons} from '@expo/vector-icons';
import SignIn from './pages/signIn/'
import Config from '../src/pages/config/Index';
import Home from './pages/home';

const ContentDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props} style={{flex:1, backgroundColor:Colors.redLight }}>

                <View style={{marginTop:20 , flexDirection:'row' ,marginLeft:30}}>

                    <Image style={{width:50 , height:50 , borderRadius:25, backgroundColor:'#fff'}}>

                    </Image>

                    <View style={{marginLeft:10}}>
                        <Text style={[ stylesFill.label , {color:'#fff'}]}>Name</Text>
                        <Text style={[ stylesFill.labelDesc , {color:'#fff'}]}>nível</Text>
                    </View>

                </View>

                <View style={{alignSelf:'center', marginVertical:10}}>

                <Text style={[ stylesFill.labelBold, {marginVertical:10 , color:'#fff'}]}>Seu QR Code</Text>
                <MaterialCommunityIcons name="qrcode-scan" size={100} color={Colors.color} />


                </View>
              
                <View style={{marginVertical:20}}>

                    <DrawerItem 
                    style={{padding: 0, marginTop:10, width:'90%' , backgroundColor:'#fff' ,borderRadius:30}}
                    label='Inicio'
                    labelStyle={[ stylesFill.label , {marginLeft: -18 , color: Colors.color}]}
                    icon={() => <AntDesign name="home" size={25} color={Colors.color} style={{marginLeft:8}} />}
                    onPress={() => props.navigation.navigate('home')}
                    
                    />
                    
                    <DrawerItem 
                    style={{padding: 0, marginTop:10,width:'90%' , backgroundColor:'#fff' ,borderRadius:30}}
                    label='Perfil'
                    labelStyle={[ stylesFill.label , {marginLeft: -18 , color: Colors.color}]}
                    icon={() => <AntDesign name="user" size={25} color={Colors.color} style={{marginLeft:8}} />}
                    onPress={() => props.navigation.navigate('home')}
                    />
                    
                    <DrawerItem 
                    style={{padding: 0,marginTop:10,width:'90%' , backgroundColor:'#fff' ,borderRadius:30}}
                    label='Cartões'
                    labelStyle={[ stylesFill.label , {marginLeft: -18 , color: Colors.color}]}
                    icon={() => <AntDesign name="creditcard" size={25} color={Colors.color} style={{marginLeft:8}}/>}
                    onPress={() => props.navigation.navigate('home')}
                    />

                    <DrawerItem 
                    style={{padding: 0,marginTop:10, width:'90%' , backgroundColor:'#fff' ,borderRadius:30}}
                    label='Configurações'
                    labelStyle={[ stylesFill.label , {marginLeft: -18 , color: Colors.color}]}
                    icon={() => <Feather name="settings" size={25} color={Colors.color} style={{marginLeft:8}}/> }
                    onPress={() => props.navigation.navigate('config')}
                    />

                </View>

                <TouchableOpacity style={{width:120, height:45 , borderRadius:25, backgroundColor:'#fff' , flexDirection:'row' , alignItems:'center' , justifyContent:'center' , alignSelf:'center', marginTop:30}} onPress={() => BackHandler.exitApp()}>
                   <MaterialIcons name="exit-to-app" size={25} color={Colors.color} style={{marginRight:5}} />
                   
                   <Text style={[ stylesFill.label , {color:Colors.color}]}>Sair</Text>
                </TouchableOpacity>

        </DrawerContentScrollView>

    )
}

//#region  Screens On Drawer Design
const ScreensDrawer = createStackNavigator()

const StacksDrawer = ({style}) =>{

    return(

        <Animated.View style={[
            {
                flex:1 , 
                overflow:"hidden",
        
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.50,
                shadowRadius: 12.35,
            
                elevation: 19,     
         
             } , style]}>
    
    
        <ScreensDrawer.Navigator >
          <ScreensDrawer.Screen name='home2' component={Home} options={{headerShown:false}}/>
        </ScreensDrawer.Navigator>
    
        </Animated.View>

    )

}

//#endregion

const Drawer = createDrawerNavigator()

const drawer = () =>{

const [progres , setProgres] = React.useState(new Animated.Value(0))

const scale = Animated.interpolate(progres,{
  
    inputRange:[0,1],
    outputRange:[1,0.8]

}) 

const borderRadius =  Animated.interpolate(progres,{

    inputRange:[0,1],
    outputRange:[0 , 10]

}) 

const screensStyles =  { borderRadius, transform: [ {scale} ] };

    return(
       
        <Drawer.Navigator 
        drawerType='slide' 
        overlayColor='transparent' 
        drawerStyle={{width:"60%"}}
        contentContainerStyle={{flex:1}}

        drawerContentOptions={{
            activeBackgroundColor:'transparent',
            activeTintColor:'green',
            inactiveTintColor:'green'
        }}

        sceneContainerStyle={{

            backgroundColor:Colors.redLight

        }}
        
        drawerContent={props => 
       { 
        setProgres(props.progress);
          return <ContentDrawer {...props}/>
       }}
        
        >
             <Drawer.Screen name='home' >
             {props => <StacksDrawer {...props} style={screensStyles}/>}
             </Drawer.Screen>

        </Drawer.Navigator>

    )  

}

const Stack = createStackNavigator()
const routes = () => {
  return (

    <NavigationContainer>

        <Stack.Navigator >
            <Stack.Screen name='Home' component={drawer} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name='config' component={Config} options={{headerShown:false}}/>
            
        </Stack.Navigator>

    </NavigationContainer>
  
    );
}

export default routes;