import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Platform, ScrollView } from 'react-native';
import icons from '../assets/icons';

const jobListings = [
    {
        companyName: 'Facebook',
        jobTitle: 'Full time UI Designer',
        location: '&8k-Tokyo, Japan',
        imageSource: icons.share,
    },
    {
        companyName: 'Babbel',
        jobTitle: 'UX Designer',
        location: '$6k-Berlin, Germany',
        imageSource: icons.chevronLeft,
    },
    {
        companyName: 'Amazon',
        jobTitle: 'Sr Product Designer',
        location: '$8k-Berlin, Germany',
        imageSource: icons.locationlinked,
    },
];

const FrontPage = () => {
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
                    <View style={styles.fulltimeUiDesigner} key={index}>
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
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 20 : 0
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
        top: 25,
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
    }
});

export default FrontPage;
