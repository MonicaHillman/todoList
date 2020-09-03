import React from 'react';
import {View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import landingImg from './assets/landing.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>To do list</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
