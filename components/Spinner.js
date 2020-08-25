import React from "react";
import {View, ActivityIndicator, StyleSheet} from "react-native"

const Spinner = ({...rest}) => {
    return (
        <View style={styles.container}>
          <ActivityIndicator {...rest} />
        </View>
    );
}

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
