import React, { Component } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles/home';
import landingImg from './assets/landing.png';

class Home extends Component {
  render () {
    return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>To do list</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Todo')}
          style={[styles.button]}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

export default Home;
