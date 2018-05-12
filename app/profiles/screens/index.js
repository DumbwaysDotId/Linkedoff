import React, { Component } from 'react'
import {
  Container, Content, Card,
  CardItem, Body, Text,
  Thumbnail
} from 'native-base'
//#1. import Image, and Dimensions from RN
import { View, StyleSheet, Image, Dimensions } from 'react-native'

//#2. Get the dimensions width of the android screen
const width = Dimensions.get('window').width

export default class Profiles extends Component{

  state = {
    data: {
      name: 'Ega Radiegtya',
      position: 'Founder of DumbWays.id',
      education: 'Satya Wacana Christian University',
      summary: "I am React Native and Django Developer. I love to share about business and technology.",
      profilePicture: "https://develop.backendless.com/221BAB21-F149-D2B2-FF55-B2DD8ECDFE00/console/flkehivadqphgmtbycrjozdigqkrwvpnfezw/files/view/images/me_animated.png",
      //#3. Add bgPicture on state
      bgPicture: "https://amazingpict.com/wp-content/uploads/2017/03/flat-1600x900-forest-deer-4k-5k-iphone-wallpaper-abstract-11925.jpg"
    }
  }

  render(){
    //#4. add bgPicture on list spread var
    const {name, position, education, summary, profilePicture, bgPicture} = this.state.data
    return (
        <Container>
          {/* #5. call bgPicture component */}
          <View style={styles.bgPictureContainer}>
            <Image
              source={{uri: bgPicture}}
              style={styles.bgPicture}
            />
          </View>
          <View style={styles.profilePicture}>
            <Thumbnail
              large
              source={{uri: profilePicture}}
            />
          </View>
          <Content style={{marginTop: 120}}>
            <Card>
              <CardItem>
                <Body style={styles.centeredBody}>
                  <Text style={styles.nameTitle}>{name}</Text>
                  <Text style={styles.position}>{position}</Text>
                  <Text style={styles.education}>{education}</Text>

                  <Text style={styles.summary}>
                    {summary}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
    )
  }

}

const styles = StyleSheet.create({
  //#6. adding bgPictureContainer styling, use zIndex 0 to make it at the very bottom of screen
  bgPictureContainer: {
    position: 'absolute',
    zIndex: 0,
  },
  //#7. adding bgPicture styling, with width from android dimensions and height hard coded 
  bgPicture: {
    width: width,
    height: 200
  },
  profilePicture: {
    paddingTop: 70,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredBody: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  education: {
    fontSize: 14,
    textAlign: 'center'
  },
  summary: {
    fontSize: 14,
    paddingTop: 20
  }
})
