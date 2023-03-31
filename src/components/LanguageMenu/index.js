import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LANGUAGE_OPTION from '../../Utils/languages';
import {Menu, MenuOption, MenuOptions} from 'react-native-popup-menu';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

const LanguageMenu = ({handleChangeLanguage, children}) => {
  const {t} = useTranslation();
  return (
    <Menu>
      {children}
      <MenuOptions customStyles={languageMenuOptionsStyles}>
        <MenuOption
          onSelect={() => handleChangeLanguage(LANGUAGE_OPTION.ENGLISH)}>
          <View style={styles.langFirstOption}>
            {i18next.language === LANGUAGE_OPTION.ENGLISH && (
              <Image
                source={require('../../assets/images/check.jpeg')}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <Text style={styles.langSelectBoxText}>{t('english')}</Text>
        </MenuOption>
        <View style={styles.selectionSeperator} />

        <MenuOption
          onSelect={() => handleChangeLanguage(LANGUAGE_OPTION.SPANISH)}>
          <View style={styles.langFirstOption}>
            {i18next.language === LANGUAGE_OPTION.SPANISH && (
              <Image
                source={require('../../assets/images/check.jpeg')}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <Text style={styles.langSelectBoxText}>{t('spanish')}</Text>
        </MenuOption>
        <View style={styles.selectionSeperator} />

        <MenuOption
          onSelect={() => handleChangeLanguage(LANGUAGE_OPTION.KANNADA)}>
          <View style={styles.langFirstOption}>
            {i18next.language === LANGUAGE_OPTION.KANNADA && (
              <Image
                source={require('../../assets/images/check.jpeg')}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <Text style={styles.langSelectBoxText}>{t('kannada')}</Text>
        </MenuOption>
        <View style={styles.selectionSeperator} />

        <MenuOption
          onSelect={() => handleChangeLanguage(LANGUAGE_OPTION.TAMIL)}>
          <View style={styles.langSecondOption}>
            {i18next.language === LANGUAGE_OPTION.TAMIL && (
              <Image
                source={require('../../assets/images/check.jpeg')}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <Text style={styles.langSelectBoxText}>{t('tamil')}</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const languageMenuOptionsStyles = StyleSheet.create({
  optionContainer: {
    borderRadius: 8,
    marginTop: 30,
    width: 120,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  optionWrapper: {padding: 14},
});
const styles = StyleSheet.create({
  langFirstOption: {
    paddingTop: 14,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  langSecondOption: {
    paddingTop: 8,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    height: '100%',
    width: '100%',
    tintColor: '#333333',
  },
  langSelectBoxText: {
    fontSize: 18,
    lineHeight: 24,
    color: '#333333',
  },
  selectionSeperator: {
    marginHorizontal: 5,
    height: 1,
    backgroundColor: '#BDBDBD',
  },
  checkContainer: {
    width: 15,
    aspectRatio: 1,
    marginRight: 2,
  },
});

export default LanguageMenu;
