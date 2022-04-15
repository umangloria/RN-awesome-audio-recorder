import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AwesomeAudioRecorderView } from 'react-native-awesome-audio-recorder';

export default function App() {
  return (
    <View style={styles.container}>
      <AwesomeAudioRecorderView color="#32a852" style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
});
