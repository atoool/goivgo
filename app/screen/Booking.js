import React, {PureComponent} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {Icon, Card, Input, Button} from 'react-native-elements';
import NavigationService from '../functions/NavigationService';

export default class Booking extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginTop: 60,
            width: '100%',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <View
            style={{
              width: '80%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  width: '80%',
                }}>
                GO FOR A TRIP
              </Text>
              {/* <View style={{}}></View> */}
            </View>
            <Text style={{fontSize: 14}}>
              Customize your package as you wish
            </Text>
          </View>

          <View style={{width: '20%'}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.goBack()}>
              <View style={{width: 35, height: 50}}>
                <Icon name="chevron-left" type="material" size={50} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Card
          containerStyle={{
            height: '100%',
            width: '100%',
            margin: 0,
            borderWidth: 0,
            elevation: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 0,
            paddingTop: 70,
          }}
          wrapperStyle={{alignContent: 'space-around'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Card
              containerStyle={{
                width: '49%',
                margin: 0,
                height: 50,
                elevation: 10,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                borderWidth: 0,
              }}
              wrapperStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>From</Text>
              <Input
                containerStyle={{
                  justifyContent: 'center',
                  margin: 0,
                  padding: 0,
                  width: 120,
                  height: 20,
                }}
                inputStyle={{
                  fontSize: 10,
                  marginBottom: -5,
                }}
              />
            </Card>
            <Card
              containerStyle={{
                width: '49%',
                margin: 0,
                height: 50,
                elevation: 10,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderWidth: 0,
              }}
              wrapperStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Input
                containerStyle={{
                  justifyContent: 'center',
                  width: 120,
                  height: 20,
                }}
                inputStyle={{
                  fontSize: 10,
                  marginBottom: -5,
                }}
              />
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>To</Text>
            </Card>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 'auto',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Card
              containerStyle={{
                width: '35%',
                borderRadius: 20,
                alignItems: 'center',
                borderWidth: 0,
                elevation: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                2
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Days
              </Text>
            </Card>
            <Card
              containerStyle={{
                width: '35%',
                borderRadius: 20,
                alignItems: 'center',
                borderWidth: 0,
                elevation: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                38
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Person
              </Text>
            </Card>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Card
              containerStyle={{
                width: '49%',
                marginHorizontal: 0,
                height: 50,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                borderWidth: 0,
                justifyContent: 'center',
                elevation: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                4 Dec 2019
              </Text>
            </Card>
            <Card
              containerStyle={{
                width: '49%',
                marginHorizontal: 0,
                height: 50,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderWidth: 0,
                justifyContent: 'center',
                elevation: 10,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                8 Dec 2019
              </Text>
            </Card>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  borderWidth: 0,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  padding: 0,
                  elevation: 10,
                }}>
                <Icon name="restaurant" type="material" size={20} />
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  borderWidth: 0,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  padding: 0,
                  elevation: 10,
                }}>
                <Icon name="hotel" type="material" size={20} />
              </Card>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  borderWidth: 0,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  padding: 0,
                  elevation: 10,
                }}>
                <Icon name="directions-bus" type="material" size={20} />
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  borderWidth: 0,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  padding: 0,
                  elevation: 10,
                }}>
                <Icon name="hotel" type="material" size={20} />
              </Card>
            </View>
          </View>
          <Button
            title={'Go get quote'}
            titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 20}}
            containerStyle={{margin: 40, overflow: 'hidden', elevation: 10}}
            buttonStyle={{
              backgroundColor: 'white',
              borderRadius: 30,
              height: 55,
            }}
          />
        </Card>
      </View>
    );
  }
}
