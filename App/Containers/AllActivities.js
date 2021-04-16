import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, Modal, Alert } from "react-native";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/ProfileScreenStyle'
import FullButton from '../Components/FullButton'
import MainLayoutScreen from './ParentComponent/MainLayoutScreen.js'

export default class AllActivities extends Component {
    render() {
        return (
          <View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            28th February <Text style={{ fontWeight: "400" }}></Text><Text style={{ fontWeight: "400" }}>Meeting with client</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            1 March <Text style={{ fontWeight: "400" }}></Text> <Text style={{ fontWeight: "400" }}>New incoming request</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            2 March <Text style={{ fontWeight: "400" }}></Text><Text style={{ fontWeight: "400" }}>Meeting with client</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            8 March <Text style={{ fontWeight: "400" }}></Text><Text style={{ fontWeight: "400" }}>Marked 12 tasks done</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            13 March <Text style={{ fontWeight: "400" }}></Text> and <Text style={{ fontWeight: "400" }}>New incoming request</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            16 March<Text style={{ fontWeight: "400" }}></Text> and <Text style={{ fontWeight: "400" }}>Payout Processed</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            20 March<Text style={{ fontWeight: "400" }}></Text><Text style={{ fontWeight: "400" }}> Marked 12 Tasks done</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
