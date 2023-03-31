import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Translation from './components/Translation';

const App = () => {
  return (
    <MenuProvider>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Translation />
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
