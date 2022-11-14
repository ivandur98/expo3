import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';

export default class App extends Component {
  state = {
    results: '',
    };
  render() {
    const { results } = this.state;
    return (
    <View style={styles.container}>
    <View>
    <TextInput style={styles.preview} value={results} placeholder="Results..." editable={false}
    multiline/>
    <TouchableOpacity onPress={this.onLoad} style={styles.btn}>
    <Text>A</Text>
    </TouchableOpacity>
    </View>
    <Text>B</Text>
    <Text>C</Text>
    <Text>D</Text>
    <Text>E</Text>
    </View>
    );
    }
    onLoad = async () => {
      this.setState({ results: 'Loading, please wait...' });
      const response = await fetch('https://2s4b8wlhik.execute-api.us-east-1.amazonaws.com/studentData?grade=', {
      method: 'GET',
      });
      const results = await response.text();
      this.setState({ results });
      }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    },
    preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
    },
    btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
    },
});
