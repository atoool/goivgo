import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StatusBar,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Card, Icon, Input, Button} from 'react-native-elements';
import BottomBar from '../components/BottomBar';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../functions/NavigationService';

export default class Destination extends PureComponent {
  state = {
    entries: ['Near by', 'Kerala', 'Goa', 'Karnataka', 'Delhi', 'Assam'],
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="white"
        />
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            margin: 20,
            marginTop: 40,
            marginBottom: 10,
          }}>
          <Icon style={{}} name="menu" type="material" />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            margin: 20,
            marginVertical: 10,
          }}>
          Where to go ?
        </Text>
        <Input
          onChangeText={cusName => this.setState({cusName})}
          autoCapitalize="characters"
          autoCompleteType="off"
          placeholder="Eg : John George"
          placeholderTextColor="rgba(255,255,255,0.2)"
          containerStyle={{
            borderWidth: 'grey',
            borderWidth: 0.2,
            borderRadius: 20,
            margin: 20,
            marginVertical: 10,
            width: '89%',
            height: 40,
          }}
          inputContainerStyle={{borderBottomColor: 'white'}}
          inputStyle={{
            // fontFamily: fonts.primary,
            fontSize: 13.5,
            color: 'blue',
          }}
        />
        <View style={{width: '100%'}}>
          <Carousel
            layout="default"
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.entries}
            renderItem={({item, index}) => {
              return (
                <TouchableNativeFeedback
                  onPress={() => NavigationService.navigate('Place')}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 380,
                      elevation: 10,
                      borderRadius: 16,
                      margin: 10,
                      marginVertical: 20,
                    }}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 16,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1523544545175-92e04b96d26b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                      }}>
                      <LinearGradient
                        colors={[
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0.4)',
                          'rgba(0,0,0,0.6)',
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 16,
                          overflow: 'hidden',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 20,
                            marginBottom: 5,
                            marginTop: 240,
                          }}>
                          MYSORE
                        </Text>
                        <Text
                          style={{
                            fontSize: 10.5,
                            color: 'white',
                            marginTop: 5,
                            margin: 20,
                          }}>
                          This is a sample text to show somet{'...'}
                        </Text>
                        <Button
                          title="go"
                          containerStyle={{
                            width: 60,
                            height: 10,
                            alignSelf: 'flex-end',
                            marginRight: 20,
                          }}
                          buttonStyle={{
                            borderRadius: 20,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderWidth: 0.2,
                            borderColor: 'white',
                            height: 30,
                          }}
                        />
                      </LinearGradient>
                    </ImageBackground>
                  </View>
                </TouchableNativeFeedback>
              );
            }}
            sliderWidth={360}
            itemWidth={300}
          />
        </View>
        <FlatList
          data={this.state.entries}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <Card
                containerStyle={{
                  height: 40,
                  width: 100,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  borderWidth: 0,
                  marginLeft: index === 0 ? 40 : 15,
                  marginRight:
                    this.state.entries.length - 1 === index ? 40 : 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  {item}
                </Text>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}
