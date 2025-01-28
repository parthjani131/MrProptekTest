/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Animated,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/Foundation';
import Icon5 from 'react-native-vector-icons/MaterialIcons';

const Explore = props => {
  const [selectedCat, setSelectedCat] = useState(1);
  const [statusBarColor,setStatusBarColor] = useState('#f2f2f2')

  const data = [
    {
      place: 'Bali, Indonesia',
      location: 'Denpasar, Bali, Indonesia',
      url: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/denpasar/denpasar1.jpg',
    },
    {
      place: 'Kyoto, Japan',
      location: 'Kyoto, Japan',
      url: 'https://cdn.tatlerasia.com/tatlerasia/i/2023/07/20152836-cosmin-georgian-kyoto-unsplash_cover_1600x1067.jpg',
    },
    {
      place: 'Maldives',
      location: 'Maldives',
      url: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg',
    },
    {
      place: 'Bangkok, Thailand',
      location: 'Bangkok, Thailand',
      url: 'https://www.indochinatravelpackages.com/wp-content/uploads/2015/07/Bangkok.jpeg',
    },
    {
      place: 'Paris, France',
      location: 'Paris, France',
      url: 'https://www.placestotravel.com/wp-content/uploads/2024/03/arc-de-triomphe-in-Paris-France.jpg',
    },
  ];

  const isFocused = useIsFocused();

  useEffect(()=>{
      if(isFocused){
          setStatusBarColor('#f2f2f2');
      }
  },[isFocused])
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={'dark-content'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 50,
              width: '75%',
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 20,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon3 name={'diamond'} size={20} color={'black'} />
              <Text style={{color: '#656565', fontSize: 14, marginLeft: 10}}>
                Search or Ask anything...
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: '13%',
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
            <Icon1 name={'sliders'} size={20} color={'black'} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingHorizontal: 20,
            paddingBottom: 10,
            borderBottomColor: '#808080',
            borderBottomWidth: 0.5,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setSelectedCat(1);
            }}
            style={{alignItems: 'center'}}>
            <Icon3
              name={'umbrella-beach'}
              size={20}
              color={selectedCat === 1 ? '#112e7b' : '#808080'}
            />
            <Text
              style={{
                color: selectedCat === 1 ? '#112e7b' : '#808080',
                fontSize: 12,
                marginTop: 10,
              }}>
              Beach
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setSelectedCat(2);
            }}
            style={{alignItems: 'center'}}>
            <Icon2
              name={'weather-windy'}
              size={20}
              color={selectedCat === 2 ? '#112e7b' : '#808080'}
            />
            <Text
              style={{
                color: selectedCat === 2 ? '#112e7b' : '#808080',
                fontSize: 12,
                marginTop: 10,
              }}>
              Desert
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setSelectedCat(3);
            }}
            style={{alignItems: 'center'}}>
            <Icon4
              name={'mountains'}
              size={20}
              color={selectedCat === 3 ? '#112e7b' : '#808080'}
            />
            <Text
              style={{
                color: selectedCat === 3 ? '#112e7b' : '#808080',
                fontSize: 12,
                marginTop: 10,
              }}>
              Mountain
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setSelectedCat(4);
            }}
            style={{alignItems: 'center'}}>
            <Icon5
              name={'temple-hindu'}
              size={20}
              color={selectedCat === 4 ? '#112e7b' : '#808080'}
            />
            <Text
              style={{
                color: selectedCat === 4 ? '#112e7b' : '#808080',
                fontSize: 12,
                marginTop: 10,
              }}>
              Temple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setSelectedCat(5);
            }}
            style={{alignItems: 'center'}}>
            <Icon2
              name={'eiffel-tower'}
              size={20}
              color={selectedCat === 5 ? '#112e7b' : '#808080'}
            />
            <Text
              style={{
                color: selectedCat === 5 ? '#112e7b' : '#808080',
                fontSize: 12,
                marginTop: 10,
              }}>
              Tower
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <View style={{marginVertical: 20}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={{
                        height: 350,
                        width: '90%',
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        source={{
                          uri: item.url,
                        }}
                        style={{
                          flex: 1,
                          justifyContent: 'space-between',
                          padding: 20,
                        }}
                        resizeMode="cover">
                        <View style={{width: '100%', alignItems: 'flex-end'}}>
                          <Icon name={'heart'} size={40} color={'white'} />
                        </View>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 24,
                              fontWeight: 'bold',
                            }}>
                            Flat 15% Off
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                height: 8,
                                width: 30,
                                borderRadius: 4,
                                backgroundColor: '#aeb7cf',
                              }}
                            />
                            <View
                              style={{
                                height: 8,
                                width: 8,
                                borderRadius: 4,
                                marginLeft: 4,
                                backgroundColor: '#6576a4',
                              }}
                            />
                            <View
                              style={{
                                height: 8,
                                width: 8,
                                borderRadius: 4,
                                marginLeft: 4,
                                backgroundColor: '#6576a4',
                              }}
                            />
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={{paddingHorizontal: 30, marginTop: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        {item.place}
                      </Text>
                      <View
                        style={{
                          height: 22,
                          width: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#f1eee4',
                          borderColor: '#e3c55e',
                          borderWidth: 1,
                          borderRadius: 11,
                        }}>
                        <Text
                          style={{
                            color: '#e3c55e',
                            fontSize: 12,
                          }}>
                          ★ 8.0
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={'location-outline'} size={12} color={'#9e9e9e'} />
                    <Text
                          style={{
                            color: '#9e9e9e',
                            fontSize: 12,
                            marginLeft:5
                          }}>
                          {item.location}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text
                          style={{
                            color: '#9e9e9e',
                            fontSize: 14,
                            fontWeight:'bold'
                          }}>
                          Book Now{' '}
                        </Text>
                    <Text
                          style={{
                            color: '#092878',
                            fontSize: 18,
                            fontWeight:'bold'
                          }}>
                           $25,000
                        </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Explore;
