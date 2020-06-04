import React, {PureComponent} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import {Card, Icon, Button} from 'react-native-elements';
import PackageComp from '../components/PackageComp';

const {height} = Dimensions.get('window');

export default class Quotes extends PureComponent {
  state = {packages: [1, 2, 3, 4, 5, 6, 7, 8, 9]};
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 80, marginTop: 60, margin: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>
            GO<Text style={{fontWeight: 'bold', fontSize: 30}}>2</Text> QUOTES
          </Text>
          <Text style={{fontSize: 14}}>
            Packages arrived! Choose the best for you
          </Text>
        </View>
        <Card
          containerStyle={{
            height: height - 180,
            width: '100%',
            margin: 0,
            borderWidth: 0,
            elevation: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 0,
            paddingTop: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                borderBottomWidth: 0.5,
                borderColor: 'lightgrey',
                paddingBottom: 10,
              }}>
              Current
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                borderBottomWidth: 0.5,
                borderColor: 'lightgrey',
                paddingBottom: 10,
              }}>
              Favourite
            </Text>
          </View>
          <PackageComp packages={this.state.packages} />
        </Card>
      </View>
    );
  }
}
