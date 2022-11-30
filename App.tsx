import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#272727' translucent />
      <Home />
    </>
  );
}
