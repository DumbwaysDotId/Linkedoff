import React, { Component } from 'react'
import {
  Container, Content, Card,
  CardItem, Body, Text,
  Thumbnail //add thumbnail on import
} from 'native-base'
import { View, StyleSheet } from 'react-native'

export default class Profiles extends Component{

  //create the state
  state = {
    data: {
      name: 'Ega Radiegtya',
      position: 'Founder of DumbWays.id',
      education: 'Satya Wacana Christian University',
      summary: "I am React Native and Django Developer. I love to share about business and technology.",
      //add your profile picture url
      profilePicture: "https://develop.backendless.com/221BAB21-F149-D2B2-FF55-B2DD8ECDFE00/console/flkehivadqphgmtbycrjozdigqkrwvpnfezw/files/view/images/me_animated.png"
    }
  }

  render(){
    //add profilePicture variable
    const {name, position, education, summary, profilePicture} = this.state.data
    return (
        <Container>
          {/* Add Thumbnail with uri from profilePicture */}
          <View style={styles.profilePicture}>
            <Thumbnail
              large
              source={{uri: profilePicture}}
            />
          </View>
          {/* adding marginTop on content to give space for bgPicture later */}
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

//create styles const to make our styles more readable
const styles = StyleSheet.create({
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
