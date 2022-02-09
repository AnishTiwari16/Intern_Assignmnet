import { StyleSheet, Text, View, SafeAreaView, FlatList, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BuyItem from './BuyItem';
import Search from './Search';

const AddedItem = () => {
    const [additem, setAddItems] = useState([])
    const [masterData, setMasterData] = useState(additem);

    const searchElement = (text) => {
    if(text){
        const data = masterData;
        const searchData = data.filter((item) => {
            return item.text.toLowerCase().includes(text.toString().toLowerCase());
        });
        setMasterData(searchData);
        
    }
    else{
        setMasterData(additem);
    }
        
 }

    const submitHandler = (text) => {
        if(text){
        setMasterData([
            ...additem,
            {text: text , key : additem.length + 1}
            ])
        setAddItems([
            ...additem,
            {text: text , key : additem.length + 1}
            ])  
        }  
        else{
            Alert.alert("Invalid Credentials!")
        }
    }
    const emptyItem = (
        <View style={{ margin: 120 }}>
          <Text style={{ fontStyle: "italic", fontSize: 20, color: "grey" }}>
            Add Item's!
          </Text>
        </View>
      );
  return (
        <SafeAreaView style = {styles.container}>
        <Search 
        searchElement = {searchElement}
        submitHandler = {submitHandler}/>
        
      <View style = {styles.BottomCard}>
          
          {masterData.length === 0 ? (
              emptyItem
          ): (
              
            <FlatList 
            data = {masterData}
            renderItem = {({item}) => (
                <BuyItem item = {item}/>
            )}
          />
          )} 
        </View>
      </SafeAreaView>
  );
};

export default AddedItem;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 90
    },
    BottomCard:{
        top: 100,
        marginBottom: 150,

    }
});