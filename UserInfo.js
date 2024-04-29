import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function UserInfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>
          Grateful for the chance to explore, unwind, and create unforgettable moments that will be cherished forever.
          Here's to the beauty of wanderlust and the magic of travel! ☀️ #VacationDiaries #Wanderlust
        </Text>
        <Image source={require('./vacation.png')} style={styles.image} />
      </View>
      <View style={styles.Icons}>
      <AntDesign name="like2" size={24} color="black" /><Text styles={styles.IconText}>62 Likes</Text>
      <Octicons name="comment" size={24} color="black" /><Text styles={styles.IconText}>6 </Text>
      <MaterialCommunityIcons name="share" size={24} color="black" /><Text styles={styles.IconText}>9 shares</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '500',
  },
  value: {
    fontWeight: '100',
  },
  content: {
    marginBottom: 10,
  },
  message: {},
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  Icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconText: {
    color: 'blue',
  },
});