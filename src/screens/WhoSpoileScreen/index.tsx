import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const WhoSpoileScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <View>
        <Text>WhoSpoileScreen</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WhoSpoileScreen;
