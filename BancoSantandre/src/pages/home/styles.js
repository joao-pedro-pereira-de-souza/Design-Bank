import {StyleSheet} from 'react-native'

import {stylesFill , WidthScreen , HeightScreen , Colors} from '../../styles'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
   
    buttonMenu:{

        marginTop:20,
        marginLeft:10 , 
        position:'absolute' , 
        padding:2 , 
        backgroundColor:'#fff' , 
        borderRadius:5

    },
    containerTopText:{
        
        justifyContent:'center',
        alignSelf:'center',
        marginTop:'20%'

    },

   containerGrid:{
    flexDirection:"row",
    flexWrap:"wrap",
    display:"flex",
   
    marginVertical:15,
    alignSelf:'center'
    
   },

   styleList :{
      
    width: '90%',
    height: HeightScreen * 0.18,
    borderRadius: HeightScreen * 0.02 / 2,
    borderBottomWidth: 5,
    borderRightWidth:5,
    borderColor: Colors.redLight,
    padding: 10,
    backgroundColor:Colors.contentColor,
    marginVertical:5

   }
  
});

export default styles;