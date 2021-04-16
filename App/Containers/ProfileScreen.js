import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, Modal, Alert } from "react-native";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/ProfileScreenStyle'
import AllActivities from './AllActivities'
import FullButton from '../Components/FullButton'
import MainLayoutScreen from './ParentComponent/MainLayoutScreen.js'

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Contact Details',
    }
    state = {
        modalVisible: false
    }
    setVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        const { navigation } = this.props;
        const { modalVisible } = this.state;

        return (
            <SafeAreaView style={styles.container}>

                <View style={{ alignItems: "center" }}>
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                            this.setVisible(!modalVisible)
                        }}
                    >
                        <View style={{ alignItems: "center" }}>

                            <View style={{ alignItems: "center" }}>


                                <View style={{ alignSelf: "center" }}>

                                    <View style={styles.statsContainer}>
                                        <View style={[styles.statsBox]}>
                                            <View style={{ alignItems: "center" }}>
                                                <Text style={[styles.text, { fontSize: 24 }]}>All Activities</Text>
                                                <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                                <AllActivities />
                                                <Button title='Close Modal' onPress={() => {
                                                    this.setVisible(!modalVisible)

                                                }} style={[styles.aboutBox, { fontSize: 24 }]} />
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignSelf: "center" }}>
                        <View style={styles.profileImage}>
                            <Image source={require("../assets/image1.jpg")} style={styles.image} resizeMode="center"></Image>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Pawan Sapkota</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>UI/UX Designer</Text>
                    </View>

                    <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                  <Icon name="logo-facebook" size={40}></Icon>
              </View>
              <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                <Icon name="logo-twitter" size={40}></Icon>
              </View>
              <View style={styles.statsBox}>
              <Icon name="logo-instagram" size={40}></Icon>
              </View>
          </View>

                    <View style={{ marginTop: 32 }}>

                        <View style={styles.aboutContainer}>
                            <View style={[styles.aboutBox]}>
                                <Text style={[styles.text, { fontSize: 24 }]}>About</Text>
                                <Text style={styles.text}>I am an enthusistic software developer. I love to solve problems.
                                I have been working on various projects of my own in mobile-app development using react-native.</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.subText, styles.activity]}>Recent Activity</Text>
                    <View style={{ alignItems: "center" }}>
                        <AllActivities />
                        <View style={styles.statsContainer}>
                            <View style={styles.statsBox}>

                                <Button title='All Activities' onPress={() => {
                                    this.setVisible(true)

                                }} style={[styles.text, { fontSize: 24 }]} />
                            </View>
                            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                <Button title='TodoList' onPress={() => { navigation.navigate('TodoListScreen') }} style={[styles.text, { fontSize: 24 }]} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
