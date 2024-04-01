import React from 'react';
import { View, Text } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { companyName, jobTitle, location } = route.params;

  return (
    <View>
      <Text>{companyName}</Text>
      <Text>{jobTitle}</Text>
      <Text>{location}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default JobDetailsScreen;
