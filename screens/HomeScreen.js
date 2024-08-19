import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <ScrollView className="pt-10">
        {/* <Header /> */}
        <ProfileInfo />
        <PlaylistSection />
        {/* <NowPlaying /> */}
      </ScrollView>
      {/* <BottomNavigation /> */}
    </SafeAreaView>
  );
};

const Header = () => (
  <View className="flex-row items-center p-4">
    <TouchableOpacity>
      <Text className="text-white text-2xl">&lt;</Text>
    </TouchableOpacity>
  </View>
);

const ProfileInfo = () => (
  <View className="items-center mb-6">
    <Image
      source={{ uri: 'https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549' }}
      className="w-24 h-24 rounded-full mb-2"
    />
    <Text className="text-white text-xl font-semibold">henrique</Text>
    <Text className="text-gray-400 text-sm">0 cadastros • 34 publicados</Text>
    <TouchableOpacity className="mt-2 px-4 py-2 bg-zinc-800 rounded-full">
      <Text className="text-white">Editar</Text>
    </TouchableOpacity>
  </View>
);

const PlaylistSection = () => (
  <View className="px-4">
    <Text className="text-white text-xl font-semibold mb-4">Playlists</Text>
    <PlaylistItem
      title="Life is Strange"
      saves="83.142 salvamentos"
      author="chloe"
      image="https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549"
    />
    <PlaylistItem
      title="Linkin Park Melhores Musicas"
      saves="0 salvamentos"
      author="henrique"
      image="https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549"
    />
    <PlaylistItem
      title="Workout 2023"
      saves="0 salvamentos"
      author="henrique"
      image="https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549"
    />
    <TouchableOpacity className="mt-4 mb-8">
      <Text className="text-gray-400 text-center">Ver todas as p...</Text>
    </TouchableOpacity>
  </View>
);

const PlaylistItem = ({ title, saves, author, image }) => (
  <View className="flex-row items-center mb-4">
    <Image source={{ uri: image }} className="w-12 h-12 mr-3" />
    <View>
      <Text className="text-white font-semibold">{title}</Text>
      <Text className="text-gray-400 text-xs">{saves} • {author}</Text>
    </View>
  </View>
);

const NowPlaying = () => (
  <View className="flex-row items-center justify-between bg-zinc-800 p-4">
    <View className="flex-row items-center">
      <Image
        source={{ uri: 'https://example.com/linkin-park-album.jpg' }}
        className="w-10 h-10 mr-3"
      />
      <View>
        <Text className="text-white">Leave Out All The Rest</Text>
        <Text className="text-gray-400 text-xs">Linkin Park</Text>
      </View>
    </View>
    <View className="flex-row items-center">
      <TouchableOpacity className="mr-4">
        <Text className="text-white text-2xl">&#9835;</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white text-2xl">&#9654;</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// const BottomNavigation = () => (
//   <View className="flex-row justify-around py-2 bg-zinc-900 border-t border-zinc-800">
//     <NavItem icon="&#127968;" label="Inicio" />
//     <NavItem icon="&#128269;" label="Buscar" />
//     <NavItem icon="&#128218;" label="Sua Biblioteca" />
//   </View>
// );

// const NavItem = ({ icon, label }) => (
//   <TouchableOpacity className="items-center">
//     <Text className="text-white text-2xl">{icon}</Text>
//     <Text className="text-gray-400 text-xs">{label}</Text>
//   </TouchableOpacity>
// );

export default ProfileScreen;