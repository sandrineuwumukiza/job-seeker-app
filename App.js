import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './components/FrontPage';
import { View } from 'react-native';
// import JobDetailsScreen from './screens/JobDetailsScreen';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <View>
      <FrontPage/>
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="FrontPage" component={FrontPage} />
    //     <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
