import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Translation from './components/Translation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View
    //   style={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flex: 1,
    //     backgroundColor: 'red',
    //     top: 500,
    //   }}>
    <MenuProvider>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Translation />
      </View>
    </MenuProvider>
    // {/* <Text>Vimal bro</Text> */}
    // </View>
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
