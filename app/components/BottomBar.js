import React from 'react';
import {Card, Icon} from 'react-native-elements';
import {
  TouchableNativeFeedback,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import NavigationService from '../functions/NavigationService';

const BottomBar = props => {
  return (
    <Card
      containerStyle={{
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        elevation: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 0,
        borderWidth: 0,
        padding: 0,
      }}
      wrapperStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableWithoutFeedback onPress={() => props.dest()}>
        <View style={{width: '30%', height: 60, justifyContent: 'center'}}>
          <Icon name="card-travel" type="material" size={30} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.go()}>
        <Card
          containerStyle={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            borderRadius: 200,
            marginTop: -10,
            alignSelf: 'center',
            borderWidth: 0,
            paddingTop: 8,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>go</Text>
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.quotes()}>
        <View style={{width: '30%', height: 60, justifyContent: 'center'}}>
          <Icon name="comment" type="font-awesome" size={30} />
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default BottomBar;
