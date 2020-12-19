import {StyleSheet} from 'react-native'
import {WidthScreen , HeightScreen , Colors} from '../../styles'

const styles = StyleSheet.create({

    container:{

        width: WidthScreen * 0.42,
        height: HeightScreen * 0.27,
        borderRadius:HeightScreen * 0.008,
        padding:3,
        margin:3  
    },

    containerIfons:{

        flex: 1,
        alignItems:'center',
        justifyContent:'center',

    },

    buttonClose:{

        position:'absolute',
        right:5,
        top:5,
        width:25,
        height:25,
        borderRadius: 25 / 2,
        backgroundColor:'#fff',

        alignItems:'center',
        justifyContent:'center'

    },
    containerCicle:{
        width: WidthScreen * 0.16,
        height: WidthScreen * 0.16,
        borderRadius: WidthScreen * 0.16 / 2,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
    
})


export default styles