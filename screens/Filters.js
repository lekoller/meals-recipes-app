import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {HeaderButton} from '../components';
import Colors from '../common/colors';
import {Creators} from '../store/ducks/meals';

const Filters = ({navigation}) => {
  const setFilters = Creators.setFilters;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  const FilterSwitch = ({label, state, setState}) => (
    <View style={styles.filterContainer}>
      <Text style={styles.item}>{label}</Text>
      <Switch
        trackColor={{true: Colors.secondaryColor, false: '#ddd'}}
        thumbColor={Colors.primaryColor}
        value={state}
        onValueChange={newValue => setState(newValue)}
      />
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        setState={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        setState={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} setState={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        setState={setIsVegetarian}
      />
    </View>
  );
};

Filters.navigationOptions = navData => ({
  headerLeft: () => (
    <HeaderButton
      iconName="bars"
      onPress={() => navData.navigation.toggleDrawer()}
    />
  ),
  headerRight: () => (
    <HeaderButton
      iconName="save"
      onPress={navData.navigation.getParam('save')}
    />
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 16,
  },
  item: {
    fontSize: 16,
  },
});

export default Filters;
