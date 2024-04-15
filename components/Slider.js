import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyAccountSubMenu = () => {
  // Define your submenu options here
  const submenuOptions = ['Orders', 'Settings', 'Address', 'My Wallet','Orders', 'Settings', 'Address', 'My Wallet'
,'Orders', 'Settings', 'Address', 'My Wallet','Orders', 'Settings', 'Address', 'My Wallet'];

  return (
    <View style={styles.subMenuContainer}>
      {submenuOptions.map(option => (
        <Text key={option} style={styles.subMenuOption}>{option}</Text>
      ))}
    </View>
  );
};

const TogglePage = ({ onClose }) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={styles.pageContainer}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          containerStyle={styles.headerContainer}
          leftComponent={null}
          centerComponent={{ text: 'Your App', style: { color: '#fff' } }}
          rightComponent={<Icon name="close" color="white" onPress={onClose} />}
        />
        <View style={styles.contentContainer}>
          <MyAccountSubMenu />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Adjust as needed
    position: 'relative', // Ensure the slider screen respects this container's boundaries
    zIndex: 1000, // E
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  },
  pageContainer: {
    flex: 1,
   
  },
  headerContainer: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20, // Add padding top to create space below header
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subMenuContainer: {
     // Set width to the full width of the screen
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth, 
    marginleft:0, // Center the submenu options vertically
  },
  subMenuOption: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
});

export default TogglePage;
