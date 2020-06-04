import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button, Card, Icon} from 'react-native-elements';
import PackageComp from '../components/PackageComp';

export default class Place extends PureComponent {
  state = {packages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]};
  componentDidMount = async () => {
    setTimeout(() => this.RBSheet.open(), 400);
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0)" />

        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={{
            uri:
              'https://images.unsplash.com/photo-1523544545175-92e04b96d26b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          }}>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              width: '100%',
              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                margin: 20,
                marginBottom: 15,
                marginTop: 240,
              }}>
              MYSORE
            </Text>
            <Text
              style={{
                fontSize: 13.5,
                textAlign: 'justify',
                color: 'white',
                marginTop: 5,
                margin: 20,
              }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Text>
            <Button
              onPress={() => {
                this.RBSheet.open();
              }}
              buttonStyle={{
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                backgroundColor: 'white',
                height: 60,
              }}
              icon={{
                name: 'chevron-up',
                type: 'font-awesome',
                size: 20,
                color: 'lightgrey',
              }}
              containerStyle={{position: 'absolute', bottom: 0, width: '100%'}}
            />
            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={495}
              duration={250}
              closeOnDragDown={false}
              customStyles={{
                container: {
                  borderTopRightRadius: 40,
                  borderTopLeftRadius: 40,
                  paddingTop: 40,
                },
                wrapper: {backgroundColor: 'rgba(0,0,0,0)'},
              }}>
              <PackageComp packages={this.state.packages} />
            </RBSheet>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
