import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Loader = () => {
    const styles = StyleSheet.create({
        bigBlue: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 30,
        }
      });

    return (
        <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.bigBlue}>Loading...!</Text>
      </View>
    )
}


export default Loader;