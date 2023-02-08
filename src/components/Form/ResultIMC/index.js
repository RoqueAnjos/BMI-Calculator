import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "../style";

export default function ResultIMC(props){
    
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc
        });
    }


    
    return(
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                {props.ResultImc !=null ?
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text tyle={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}