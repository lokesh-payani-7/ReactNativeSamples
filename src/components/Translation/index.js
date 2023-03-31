import {View, Text} from 'react-native';
import React from 'react';
import LanguageMenu from '../LanguageMenu';
import {MenuTrigger} from 'react-native-popup-menu';
import LANGUAGE_OPTION from '../../Utils/languages';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

const handleChangeLanguage = async LANGUAGE_OPTION => {
  await i18next.changeLanguage(LANGUAGE_OPTION);
};
const Translation = () => {
  const {t} = useTranslation();
  return (
    <LanguageMenu handleChangeLanguage={handleChangeLanguage}>
      <MenuTrigger>
        <View style={{padding: 10, backgroundColor: 'gray', borderRadius: 5}}>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
            {t('lang')}
          </Text>
        </View>
      </MenuTrigger>
    </LanguageMenu>
  );
};

export default Translation;
