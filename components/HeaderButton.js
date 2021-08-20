import React from 'react';
import {TouchableOpacity, View, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../common/colors';

const HeaderButton = props => {
  const name = props.iconName;
  const handlePress = props.onPress;
  const defaultColor =
    Platform.OS === 'android' ? 'white' : Colors.primaryColor;
  let color = props.color ? props.color : defaultColor;

  switch (color) {
    case 'primary':
      color = Colors.primaryColor;
      break;
    case 'secondary':
      color = Colors.secondaryColor;
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container}>
        <Icon name={name} size={22} color={color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default HeaderButton;
