import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//create a component

const Header = (props) => {
//  const { textStyle, viewStyle } = styles;
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>

);

};

const styles = StyleSheet.create ({
  headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
