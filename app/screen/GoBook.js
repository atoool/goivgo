import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import NavigationService from '../functions/NavigationService';

export default class GoBook extends PureComponent {
  state = {
    category: ['Family trip', 'Students trip', 'Honeymoon trip', 'Rental'],
  };
  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <View style={{height: 150, marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>GO FOR A TRIP</Text>
          <Text style={{fontSize: 14}}>Customize your package as you wish</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'space-around',
            justifyContent: 'space-evenly',
          }}>
          {this.state.category.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => this.props.navigation.navigate('Booking')}>
              <View
                style={{
                  elevation: 10,
                  width: 140,
                  padding: 40,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  margin: 10,
                }}>
                <Image
                  style={{width: 80, height: 60}}
                  source={{
                    uri:
                      'https://images.all-free-download.com/images/graphicthumb/family_travel_design_vector_589129.jpg',
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    textAlign: 'center',
                    marginTop: 20,
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    );
  }
}
