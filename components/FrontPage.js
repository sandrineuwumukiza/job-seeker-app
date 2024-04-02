import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Platform, ScrollView,TouchableOpacity } from 'react-native';
import icons from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from '@rneui/themed';


const jobListings = [
    {
        companyName: 'Facebook',
        jobTitle: 'Full time UI Designer',
        location: '$8k - Tokyo, Japan',
        imageSource:icons.facebook,
      
    },
    {
        companyName: 'Babbel',
        jobTitle: 'UX Designer',
        location: '$6k - Berlin, Germany',
        imageSource: icons.chevronLeft,
    },
    {
        companyName: 'Amazon',
        jobTitle: 'Sr Product Designer',
        location: '$8k - Berlin, Germany',
        imageSource: icons.linkedin,
    },
];

const FrontPage = () => {

const navigation = useNavigation(); // Initialize navigation

const handleJobDetails = (job) => {
    navigation.navigate('JobDetails', {
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      location: job.location,
      imageSource: job.imageSource,
    });
  };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.leftView}>
                    <Image
                        style={styles.left}
                        source={icons.left}
                    />
                </View>

                <View style={styles.ui}>
                    <Text style={styles.uiText}>UI/UX Design</Text>
                    <View style={styles.uiFilter}>
                        <Image
                            style={styles.filter}
                            source={icons.filter}
                        />
                    </View>
                    <Text style={styles.textOpportunity}>32 Job Opportunities</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Most Relevant" style={styles.button1} color='#312651'/>
                    <Button title="Most Recent" style={styles.button2} color='#E6E4E6'/>
                </View>

                {jobListings.map((job, index) => (
                    <TouchableOpacity key={index} onPress={() => handleJobDetails(job)}>
                        <View style={styles.fulltimeUiDesigner}>
                            <View style={styles.firstImage}>
                                <Image
                                    source={job.imageSource}
                                    style={styles.facebook}
                                />
                            </View>
                            <View style={styles.designtext}>
                                <Text>{job.companyName}</Text>
                                <Text>{job.jobTitle}</Text>
                                <Text>{job.location}</Text>
                            </View>
                            <View>
                                <Image
                                    source={icons.heart}
                                    style={styles.heartIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

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
        backgroundColor: '#FFFFFF',
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
    }
});

export default FrontPage;
