import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])


import Routes from './routes';

export default () => {
  return(
    <Routes />
  );
}