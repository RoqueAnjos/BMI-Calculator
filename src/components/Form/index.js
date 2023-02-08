import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration,
Pressable, Keyboard} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(props){

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [errorMessage, setErrorMessase] = useState(null);


function imcCalculator(){
    let heightFormat = height.replace(",", ".   ");
    let weightFormat = height.replace(",", ".   ");
    return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2));
}

function verificationImc(){
    if(imc==null){
        setErrorMessase("campo obrigatório*");
        Vibration.vibrate();
    }
}

function validationImc(){
    if(weight!=null && height!=null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setErrorMessase(null);
        setMessageImc("Seu imc é igual a: ");
        setTextButton("Calcular novamente");
        return;
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
}

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"  />
                
                <Text>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 75.403"
                keyboardType="numeric"  />
            
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => validationImc()}
                title={textButton}    
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <ResultIMC messageResultImc={messageImc} resultImc={imc} />

        </Pressable>
    );
}