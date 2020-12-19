import {StyleSheet} from 'react-native';
import {WidthScreen , HeightScreen , Colors} from '../../styles'

const styles = StyleSheet.create({
    container:{

        width: WidthScreen * 0.42,
        height: HeightScreen * 0.23,
        borderRadius: HeightScreen * 0.008,
        
        alignItems:'center',
        justifyContent:'center',
        margin:3,
        padding: 3,

    },
    
    containerIfons:{

        flex: 1,
        alignItems:'center',
        justifyContent:'center',

    },
    containerCicle:{
        width: WidthScreen * 0.16,
        height: WidthScreen * 0.16,
        borderRadius: WidthScreen * 0.16 / 2,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default styles;