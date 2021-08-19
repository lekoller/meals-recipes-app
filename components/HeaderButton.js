import React from 'react';
import {TouchableOpacity, View, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../common/colors';

const HeaderButton = props => {
  const name = props.iconName;
  const handlePress = props.pressAction;

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container}>
        <Icon
          name={name}
          size={22}
          color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
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
