import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , SafeAreaView, Button } from 'react-native';

export default function RegisterPage() {
    return (
      <View style={styles.container}>
        <Text>Register Page</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  