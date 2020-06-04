import React, {PureComponent} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Card, Icon, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';

const PackageComp = props => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{width: '100%', marginTop: 10}}
        contentContainerStyle={{
          alignItems: 'center',
          height: 'auto',
          paddingBottom: 80,
        }}>
        {props.packages.map((item, index) => (
          <Card
            key={index}
            containerStyle={{
              height: 'auto',
              width: '80%',
              borderRadius: 16,
              borderWidth: 0,
              elevation: 4,
              padding: 20,
            }}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Text style={{fontWeight: 'bold', alignSelf: 'flex-end'}}>
                ₹ 2000 - ₹ 4000
              </Text>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 10,
                  fontSize: 10,
                  alignSelf: 'flex-end',
                }}>
                {index}
              </Text>
              <View style={{alignSelf: 'flex-end', width: '70%'}}>
                <Icon name="favorite-border" type="material" size={15} />
              </View>
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                marginTop: 5,
              }}>
              #family #students #group
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                marginTop: 5,
              }}>
              min. persons : 40
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '70%',
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  width: 60,
                  borderRadius: 30,
                  textAlign: 'center',
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                mysore
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  width: 50,
                  borderRadius: 30,
                  textAlign: 'center',
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                kodai
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  width: 40,
                  borderRadius: 30,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                ooty
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{width: 100, height: 20, marginTop: 10}}
                source={{
                  uri:
                    'http://css-stars.com/wp-content/uploads/2013/12/4-stars.jpg',
                }}
              />
              <Button
                title="go"
                titleStyle={{fontWeight: 'bold', color: 'black'}}
                buttonStyle={{
                  borderRadius: 20,
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  borderColor: 'grey',
                  width: 50,
                  height: 30,
                }}
                containerStyle={{borderRadius: 20, overflow: 'hidden'}}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PackageComp;
