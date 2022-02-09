import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
 

const Search = ({submitHandler, searchElement}) => {

    const [input, setInput] = useState("");

  return (
      <View style = {styles.header}>
        <View style = {styles.input}>
        <TextInput 
            clearButtonMode='always'
            placeholder='Search'
            onChangeText={(text) => {
                setInput(text);
                searchElement(text);
            }}
            value = {input}
            />
        <View style = {styles.horizontalLine} />
        
        </View>
        <TouchableOpacity style = {styles.plus_sty}  onPress={()=> {
            submitHandler(input)
            
        }}>
        <AntDesign name="plus" size={30} color="black"/>
        </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    input: {
        // marginLeft: 5,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#FFF",
        borderWidth: 1,
        width: 280
    },
    horizontalLine:{
        top: 30,
        borderWidth: 0.5, 
        borderColor: 'black', 
        height: 1,
        backgroundColor: "black",
        width: 338
    },
    header: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    plus_sty: {
        marginLeft: 40
    }
});
