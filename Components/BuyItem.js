import { StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native';
import React from 'react';

const BuyItem = ({item}) => {
  return (
    <View>
      <ScrollView>
      <View style = {styles.lineStyle} />
          <View  style = {styles.firstCard}>
          <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{item.text}</Text>
          </View>
        </ScrollView>
    </View>
  );
};

export default BuyItem;

const styles = StyleSheet.create({
    firstCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    lineStyle:{
        borderWidth: 0.5, 
        height: 1,
        borderColor: 'black', 
        backgroundColor: "black",
        width: Dimensions.get('window').width,
    }
});
