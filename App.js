import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './components/FrontPage';
import JobDetailsScreen from './components/jobDetailScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    // <View>
    //   <FrontPage/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
