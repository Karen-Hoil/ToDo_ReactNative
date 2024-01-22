import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tareas = (props) => {

    return(
        <View style={style.item}>
            <View style={style.itemLeft}>
                {/* cuadrado */}
                <View style={style.square}></View> 
                <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.circular}>
                {/* circulo */}

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    item:{
        backgroundColor: '#CBA4EA',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height:24,
        backgroundColor: '#FFFFFF',
        opacity:0.4,
        borderRadius:5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%',
        fontWeight: 'bold'
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#B659FF',
        borderWidth:2,
        borderRadius: 5,
        marginTop: 5,
        marginRight:5
    }
});

export default Tareas;
