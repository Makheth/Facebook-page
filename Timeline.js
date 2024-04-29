import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { AntDesign, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Timeline({ route }) {
  const navigation = useNavigation();
  const email = route.params.paramemail;

  const [selectedFeature, setSelectedFeature] = useState('home');

  const handleFeaturePress = (feature) => {
    console.log(`${feature} pressed`);
    setSelectedFeature(feature);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.facebookFeatures}>
        <Pressable onPress={() => handleFeaturePress('home')} style={[styles.feature, selectedFeature === 'home' && styles.selectedFeature]}>
          <AntDesign name="home" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => handleFeaturePress('friends')} style={[styles.feature, selectedFeature === 'friends' && styles.selectedFeature]}>
          <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => handleFeaturePress('messages')} style={[styles.feature, selectedFeature === 'messages' && styles.selectedFeature]}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => handleFeaturePress('notifications')} style={[styles.feature, selectedFeature === 'notifications' && styles.selectedFeature]}>
          <AntDesign name="bells" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => handleFeaturePress('videos')} style={[styles.feature, selectedFeature === 'videos' && styles.selectedFeature]}>
          <MaterialCommunityIcons name="video-outline" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => handleFeaturePress('marketplace')} style={[styles.feature, selectedFeature === 'marketplace' && styles.selectedFeature]}>
          <MaterialCommunityIcons name="storefront-outline" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.whatsOnYourMindContainer}>
        <Image source={require('./profile.png')} style={styles.profilePicture} />
        <Pressable onPress={() => console.log("What's on your mind pressed")}>
          <Text style={styles.whatsOnYourMind}>What's on your mind?</Text>
        </Pressable>
        <Pressable onPress={() => console.log("Photo icon pressed")}>
          <AntDesign name="camera" size={24} color="black" style={styles.cameraIcon} />
        </Pressable>
      </View>
      <Text>Stories</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal showsHorizontalScrollIndicator={false}>
        <StoryItem label="Leeto Jane" image={require('./me.png')} />
        <StoryItem label="Maltee ls" image={require('./graduation.png')} />
        <StoryItem label="Dee Fusi" image={require('./vacation.png')} />
        <StoryItem label="Tee Chaka" image={require('./Fashion.png')} />
        <StoryItem label="Lerato " image={require('./IT.png')} />
        <StoryItem label="Triziee " image={require('./hospitality and Tourism.png')} />
        <StoryItem label="Nolo" image={require('./business management.png')} />
        <StoryItem label="Taylor ld" image={require('./broadcasting.png')} />
      </ScrollView>
      <ScrollView contentContainerStyle={styles.postsContainer}>
        <Post
          label="Sasha Morobi"
          value="16 min ago"
          message="Grateful for the chance to explore, unwind, and create unforgettable moments that will be cherished forever. Here's to the beauty of wanderlust and the magic of travel! ☀️ #VacationDiaries #Wanderlust"
          image={require('./vacation.png')}
        />
        <Post
          label="Lintle Sasha Sello"
          value="1 hour ago"
          message="Celebrating my graduation today! 🎓 #ClassOf2024"
          image={require('./graduation.png')}
        />
        <Post
          label="Mellow dee"
          value="2 hours ago"
          message="Absolutely in love with this stunning wedding gown designed by @Rellow Mafeisi. Can't wait for the big day! 💍"
          image={require('./wedding gown.png')}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function StoryItem({ label, image }) {
  return (
    <View style={styles.storyItem}>
      <Image source={image} style={styles.storyImage} />
      <Text style={styles.storyLabel}>{label}</Text>
    </View>
  );
}

function Post({ label, value, message, image }) {
  const [likes, setLikes] = useState(0); 

  const handleLikePress = () => {
    setLikes(likes + 1); 
    console.log('Like button pressed');
  };

  return (
    <View style={styles.postContainer}>
      <Image
        source={image}
        style={styles.profilePicture}
      />
      <View style={styles.userInfoContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.message}>{message}</Text>
          <Image source={image} style={styles.postImage} />
        </View>
        <View style={styles.icons}>
          <Pressable onPress={handleLikePress}>
            <AntDesign name="like2" size={24} color="black" />
          </Pressable>
          <Text style={styles.iconText}>{likes} Likes</Text>
          <Octicons name="comment" size={24} color="black" /><Text style={styles.iconText}>6 </Text>
          <MaterialCommunityIcons name="share" size={24} color="black" /><Text style={styles.iconText}>shares</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  facebookFeatures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feature: {
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    padding: 10,
  },
  selectedFeature: {
    backgroundColor: 'blue', 
  },
  whatsOnYourMindContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  whatsOnYourMind: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  cameraIcon: {
    marginLeft: 10,
  },
  scrollViewContent: {
    marginBottom: 10,
  },
  postsContainer: {
    marginBottom: 20,
  },
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
    overflow: 'hidden', 
    borderRadius: 10, 
  },
  storyImage: {
    width: 68,
    height: 120,
    borderRadius: 10, 
  },
  storyLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    color: 'white', 
    paddingVertical: 2,
  },
  postContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfoContainer: {
    flex: 1,
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
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconText: {
    color: 'blue',
  },
});
