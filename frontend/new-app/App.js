import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyForm from './screens/MyForm'; // Assuming you saved the form component in a file named MyForm.js

const App = () => {
  return (
    <View style={styles.container}>
      <MyForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
