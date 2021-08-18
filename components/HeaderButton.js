import React from 'react';
import {TouchableOpacity, View, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../common/colors';

const HeaderButton = props => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon
          name="star"
          size={22}
          color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

export default HeaderButton;
