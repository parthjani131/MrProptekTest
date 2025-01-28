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
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import CountryFlag from 'react-native-country-flag';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/Foundation';

const Home = props => {
  const [isOn, setIsOn] = useState(false);
  const [selectedCat, setSelectedCat] = useState(1);
  const [statusBarColor,setStatusBarColor] = useState('#021f73')
  const translateX = new Animated.Value(isOn ? 20 : 0);

  const isFocused = useIsFocused();

useEffect(()=>{
    if(isFocused){
        setStatusBarColor('#021f73');
    }
},[isFocused])

  const toggleSwitch = () => {
    setIsOn(!isOn);
    Animated.timing(translateX, {
      toValue: isOn ? 0 : 30,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={'light-content'} />
        <View
          style={{
            height: 350,
            width: '100%',
            backgroundColor: '#021f73',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 18,
                  overflow: 'hidden',
                }}>
                <CountryFlag isoCode="ae" size={35} />
              </View>
              <View style={{marginLeft: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginRight: 5,
                    }}>
                    Palm Jumeirah
                  </Text>
                  <Icon name={'chevron-down'} size={14} color={'white'} />
                </View>
                <Text style={{color: '#FFFFFF80', fontSize: 12}}>
                  Dubai, United Arab Emirates
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 18,
                  overflow: 'hidden',
                  marginRight: 5,
                  backgroundColor: '#344c8a',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon1 name={'balance-scale'} size={18} color={'white'} />
              </View>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 18,
                  overflow: 'hidden',
                  marginRight: 5,
                  backgroundColor: '#344c8a',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon2 name={'bell-ring-outline'} size={20} color={'white'} />
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                props.navigation.navigate('Explore');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 50,
                width: '85%',
                backgroundColor: '#344c8a',
                borderRadius: 20,
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon3 name={'diamond'} size={20} color={'white'} />
                <Text
                  style={{color: '#FFFFFF80', fontSize: 14, marginLeft: 10}}>
                  Search or Ask anything...
                </Text>
              </View>
              <Icon1 name={'sliders'} size={18} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.6}>
              <View
                style={{
                  width: 50,
                  height: 25,
                  borderRadius: 18,
                  backgroundColor: isOn ? '#2e5161' : '#2e516180',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 3},
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  marginLeft: 5,
                }}>
                <Animated.View
                  style={{
                    height: 35,
                    width: 30,
                    borderRadius: 18,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translateX}],
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                  }}>
                  <Text
                    style={{
                      color: '#7AC142',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    C
                  </Text>
                </Animated.View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 200,
              width: '100%',
              backgroundColor: '#344c8a',
              borderRadius: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <View
              style={{height: '100%', width: '35%', justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: 5,
                }}>
                TRAVEL
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: 5,
                }}>
                SIMPLIFIED
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  props.navigation.navigate('Explore');
                }}
                style={{
                  height: 25,
                  width: 80,
                  backgroundColor: '#021f73',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginRight: 5,
                  }}>
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: '100%', width: '65%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '10',
                }}>
                <View
                  style={{
                    height: 160,
                    width: 100,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <ImageBackground
                    source={{
                      uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3f/89/e2/church-at-ridge.jpg?w=1800&h=-1&s=1',
                    }}
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                    resizeMode="cover">
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        backgroundColor: '#0000004D',
                      }}>
                      <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 'bold',
                            marginRight: 5,
                          }}>
                          The Ridge
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Icon
                            name={'location-sharp'}
                            size={10}
                            color={'white'}
                          />
                          <Text
                            style={{
                              color: '#FFFFFFBF',
                              fontSize: 8,
                              marginLeft: 5,
                            }}>
                            Shimla, Himachal Pradesh
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    height: 160,
                    width: 100,
                    borderRadius: 20,
                    overflow: 'hidden',
                    marginLeft: 15,
                  }}>
                  <ImageBackground
                    source={{
                      uri: 'https://freeguideforyou.com/wp-content/uploads/2022/02/HPCA-Dharamshala-Cricket-Stadium.jpg',
                    }}
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                    resizeMode="cover">
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      }}>
                      <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 'bold',
                            marginRight: 5,
                          }}>
                          HPCA
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Icon
                            name={'location-sharp'}
                            size={10}
                            color={'white'}
                          />
                          <Text
                            style={{
                              color: '#FFFFFFBF',
                              fontSize: 8,
                              marginLeft: 5,
                            }}>
                            Dharamshala, Himachal Pradesh
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  marginLeft: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 5,
                    width: 20,
                    borderRadius: 3,
                    backgroundColor: '#aeb7cf',
                  }}
                />
                <View
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: 3,
                    marginLeft: 3,
                    backgroundColor: '#6576a4',
                  }}
                />
                <View
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: 3,
                    marginLeft: 3,
                    backgroundColor: '#6576a4',
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{marginVertical: 10, paddingHorizontal: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Categories
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSelectedCat(1);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: selectedCat === 1 ? '#122a76' : '#f1f3ff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#dfe3f2',
              }}>
              <Icon4
                name={'mountains'}
                size={16}
                color={selectedCat === 1 ? 'white' : 'black'}
              />
              <Text
                style={{
                  color: selectedCat === 1 ? 'white' : 'black',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                Mountains
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSelectedCat(2);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: selectedCat === 2 ? '#122a76' : '#f1f3ff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#dfe3f2',
                marginLeft: 5,
              }}>
              <Icon2
                name={'weather-windy'}
                size={16}
                color={selectedCat === 2 ? 'white' : 'black'}
              />
              <Text
                style={{
                  color: selectedCat === 2 ? 'white' : 'black',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                Desert
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSelectedCat(3);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: selectedCat === 3 ? '#122a76' : '#f1f3ff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#dfe3f2',
                marginLeft: 5,
              }}>
              <Icon3
                name={'umbrella-beach'}
                size={13}
                color={selectedCat === 3 ? 'white' : 'black'}
              />
              <Text
                style={{
                  color: selectedCat === 3 ? 'white' : 'black',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                Beach
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setSelectedCat(0);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#83c219',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#dfe3f2',
                marginLeft: 5,
              }}>
              <Icon name={'grid-outline'} size={16} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginVertical: 10,
            padding: 20,
            paddingBottom: 10,
            backgroundColor: '#e8e9ed',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Explore Localities
            </Text>
            <Text
              style={{
                color: '#122a76',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              View All
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 100,
                width: '48%',
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 5,
                }}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{
                      uri: 'https://sncdn.com/tpc/g/957/622/2628733.jpg',
                    }}
                    style={{height: 35, width: 35}}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  style={{
                    color: '#83c219',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  +13.34% ▲
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                UAE
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Palm Jumeirah
              </Text>
            </View>
            <View
              style={{
                height: 100,
                width: '48%',
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 5,
                }}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{
                      uri: 'https://indotoursadventures.com/public/storage/blogs/d4cd91da972622aaadc74d6aad6bb615.jpg',
                    }}
                    style={{height: 35, width: 35}}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  style={{
                    color: '#ed4357',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  +13.34% ▼
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                India
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Taj Mahal
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 5,
                width: 20,
                borderRadius: 3,
                backgroundColor: '#363738',
              }}
            />
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 3,
                marginLeft: 3,
                backgroundColor: '#b2b3b6',
              }}
            />
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 3,
                marginLeft: 3,
                backgroundColor: '#b2b3b6',
              }}
            />
          </View>
        </View>

        <View style={{marginVertical: 10, paddingHorizontal: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Popular Cities
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <View
                style={{
                  height: 120,
                  width: 85,
                  borderRadius: 45,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/1200px-Abu_dhabi_skylines_2014.jpg',
                  }}
                  style={{height: 125, width: 100}}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Abu Dhabi
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <View
                style={{
                  height: 120,
                  width: 85,
                  borderRadius: 45,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ab/8f/c0/caption.jpg?w=500&h=400&s=1',
                  }}
                  style={{height: 125, width: 100}}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Sharjah
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <View
                style={{
                  height: 120,
                  width: 85,
                  borderRadius: 45,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62TserhfR_uI4caR_T4-5OT2wT4swCQD4WQ&s',
                  }}
                  style={{height: 125, width: 100}}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Ajman
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <View
                style={{
                  height: 120,
                  width: 85,
                  borderRadius: 45,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: 'https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800',
                  }}
                  style={{height: 125, width: 100}}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Dubai
              </Text>
            </View>
          </View>

          <View style={{height: 650, width: '100%'}}>
            <Image
              source={{
                uri: 'https://i.ibb.co/SvKvWXb/Screenshot-2025-01-28-at-6-14-08-PM.png',
              }}
              style={{height: 650, width: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
