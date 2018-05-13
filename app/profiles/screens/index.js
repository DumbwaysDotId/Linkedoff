import React, { Component } from 'react'
import {
  Container, Content, Card,
  CardItem, Body, Text,
  Thumbnail, Spinner
} from 'native-base'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
// import axios from 'axios'
import { connect } from 'react-redux'

import { getProfile } from '../actions'

const width = Dimensions.get('window').width

class Profiles extends Component{

  state = {
    data: {}
  }

  // getProfile(){
  //   const url = `https://api.backendless.com/221BAB21-F149-D2B2-FF55-B2DD8ECDFE00/31717453-DFFE-7469-FF91-D1EAC0C16700/data/profiles/564DD7D4-4F12-B56A-FFD5-1E4B0E7D9D00?loadRelations=experiences%2Ceducations`
  //   axios.get(url).then((result)=>{
  //     this.setState({
  //       data: result.data
  //     })
  //   })
  // }

  componentDidMount(){
    this.props.dispatch(getProfile())
  }


  render(){
    const {name, experiences, educations, summary, profilePicture, bgPicture} = this.props.profiles.data

    const latestExperience = experiences? experiences[0]: null
    const position = latestExperience? `${latestExperience.position} at ${latestExperience.companyName}`: '-'

    const latestEducation = educations? educations[0]: null
    const education = latestEducation? latestEducation.school: '-'

    return (
        <Container>
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

          {this.props.profiles.isLoading? (
            <Spinner/>
          ): (
            <Content style={{marginTop: 120}}>
              <Card>
                <CardItem>
                  <Body style={styles.centeredBody}>
                    <Text style={styles.nameTitle}>{name}</Text>
                    <Text style={styles.experiences}>{position}</Text>
                    <Text style={styles.education}>{education}</Text>

                    <Text style={styles.summary}>
                      {summary}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          )}
        </Container>
    )
  }

}

const mapStateToProps = (state)=>({
  profiles: state.profilesReducer
})

export default connect(mapStateToProps)(Profiles)

const styles = StyleSheet.create({
  bgPictureContainer: {
    position: 'absolute',
    zIndex: 0,
  },
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
