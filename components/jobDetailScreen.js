import React from 'react';
import icons from '../assets/icons';
import { View, Text, Button,StyleSheet,FlatList,Image,ScrollView } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { companyName, jobTitle, location,imageSource } = route.params;
  const data = [
    { id: '1', title: 'Bachelors degree or equivalent practical expirience.' },
    { id: '2', title: '7 years of technical Product management expirience such as creating strategic product roadmaps and working with cross-functional teams.' },
    { id: '3', title: 'Expirience driving product vision,go-to-market strategy,and design discussions.' },
    { id: '4', title: 'Expirience developing Internet products and technologies.'}
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.title}>{item.title}</Text>
  </View>
  );

  return (
    <View>
      <ScrollView>
      <View style={styles.header}>
        <View style={styles.logoView}>
          <Image source={imageSource} style={styles.logo} />
        </View>
        
        <View style={styles.companyInfo}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.companyName}>{companyName} /{location}</Text>
        </View>
        </View>
      <View style={styles.buttonContainer}>
                    <Button title="Description" style={styles.button1} color='#312651'/>
                    <Button title="Company" style={styles.button2} color='lightgrey'/>
                    <Button title='Reviews' color='lightgrey'/>
                </View>
                <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.ListContainer}
    />
    <View style={styles.ListContainer}>
      <Text style={styles.textAbout}>About the job:</Text>
      <Text>At Google,we put our users first.Lorem ipsum</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.heartImage}>
        <Image source={icons.heart} style={{width:30,height:30}}/>
        </View>
        <Button title='Apply for job' color='#FF7755' style={{padding:20}}/>
      </View>

    </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      // paddingTop: Platform.OS === "android" ? 20 : 0
  },
  left: {
      width: 20,
      height: 20,
  },
  leftView: {
      backgroundColor: 'lightgrey',
      padding: 3,
      borderRadius: 10,
      position: 'absolute',
      top: 15,
      left: 20,
  },
  ui: {
      marginTop: 45,
      left: 20,
  },
  filter: {
      width: 20,
      height: 20,
  },
  uiText: {
      fontSize: 30,
  },
  uiFilter: {
      backgroundColor: 'orange',
      position: 'absolute',
      top: 10,
      right: 40,
      padding: 5,
      borderRadius: 10,
  },
  textOpportunity: {
      fontSize: 15,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
  },
  button1:{
      backgroundColor: 'white', 
      borderRadius: 20, 
      marginHorizontal: 10,
  },
  button2:{
      backgroundColor: '#C1C0C8',
      borderRadius: 20, 
      marginHorizontal: 10,
  },
  fulltimeUiDesigner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      marginVertical: 5,
      margin: 20,
      marginTop: 20,
  },
  designtext: {
      flex: 1,
      marginHorizontal: 20,
  },
  facebook: {
      width: 30,
      height: 30,
  },
  heartIcon: {
      width: 30,
      height: 30,
  },
  firstImage:{
      backgroundColor: '#fff',
      padding:15,
      borderRadius:20
  },  
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  
  },
  ListContainer:{
    backgroundColor:'#FFFFFF',
    margin:20,
    borderRadius:20,
    padding:10,
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    padding: 10,
  },
  textAbout:{
    fontSize:25,
    fontWeight: 'bold',
  },
  heartImage:{
    borderColor:'#FF7755',
    borderWidth:1,
    borderRadius:10,
    padding:10,
  },
  companyInfo:{

  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width:40,
    height:40,
  },
  logoView:{
    backgroundColor:'#FFFFFF',
    padding:20,
    borderRadius:20,
    // marginTop:10,
    // marginBottom:10,
  },
  jobTitle:{
    fontSize:30,
    color:'#655C7D'
  }
});


export default JobDetailsScreen;
