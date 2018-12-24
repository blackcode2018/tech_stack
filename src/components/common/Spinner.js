import React, {Component} from 'react';
import { View, Text , StyleSheet, ActivityIndicator } from 'react-native';

const Spinner = ({ size}) => {
  return(
      <View style={styles.spinnerStyle}>
        <ActivityIndicator

          size={size || 'large'}/>
      </View>
  );
};


const styles = StyleSheet.create({
  spinnerStyle: {

    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  }



});
export { Spinner };
