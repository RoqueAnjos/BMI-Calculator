import React, {useState, useTransition} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration,
Pressable, Keyboard, FlatList} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(props){

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [errorMessage, setErrorMessase] = useState(null);
const [imcList, setImcList] = useState([]);

function imcCalculator(){
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalImc = (weightFormat/(heightFormat*heightFormat)).toFixed(2);

    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]);
    setImc(totalImc);
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
        setTextButton("Calcular novamente")
    }else{
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }
    
}

    return(
       
        <View style={styles.formContext}>
            {imc == null ?
            
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"  />
                    
                    <Text style={styles.formLabel}>Peso</Text>
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
                </Pressable>
            :
                <View style={styles.exhibitionResultImc}>
                <ResultIMC messageResultImc={messageImc} resultImc={imc} />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => validationImc()}
                    title={textButton}    
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.listIms} 
            data={imcList.reverse()}
            renderItem={({item}) => {
                return (
                    <Text style={styles.resultImcItem}>
                        Resultado IMC = 
                        <Text style={styles.textResultItemList}>{item.imc}</Text>
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            />

        </View>

    );
}