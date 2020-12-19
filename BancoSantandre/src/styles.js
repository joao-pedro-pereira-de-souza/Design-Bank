import {Dimensions , StyleSheet} from 'react-native'

export const {width:WidthScreen , height:HeightScreen} = Dimensions.get('window')

export const Colors = {
    color:'#4b4b4b',
    contentColor:'#F2F2F2',
    red:'#ff3f34',
    redLight :'#ff6b6b'

}

export const stylesFill = StyleSheet.create({

    title:{

        fontFamily:'OpenSans_700Bold',
        fontSize: WidthScreen * 0.058,      
    },
    labelBold:{

        fontFamily:'OpenSans_700Bold',
        fontSize: WidthScreen * 0.043,

    },
    label:{

        fontFamily:'OpenSans_400Regular',
        fontSize: WidthScreen * 0.043,

    },
    labelDesc:{
        fontFamily:'OpenSans_400Regular',
        fontSize: WidthScreen * 0.028,
    }

})