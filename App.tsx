import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <View style={{flex:1}} >
      <StatusBar style="auto" />
      <Home/>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}



