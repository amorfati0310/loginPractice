import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import styled, {css} from 'styled-components/native';
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk';
import firebase from 'firebase';
import axios from 'axios';

// const FBSDK = require('react-native-fbsdk');
const ButtonText = styled.Text`
 color: white;
 font-size: 24px;
`

const ButtonWrapper = styled.TouchableOpacity`
  width: 300;
  height: 47px;
  background-color: #a2a2a2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20;
  margin-bottom: 20;
`

const TitleBox = styled.View`
  margin-bottom: 45px;
`
const Title = styled.Text`
  font-size: 30px;
  letter-spacing: 0.05;
`

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
      };
  }
  handleChange = name => text => {
      this.setState({
          [name]: text
      });
      // console.log('this.state', this.state)
  };
  handleSubmit = ()=>{
    const user = {
      id: this.state.email,
      password: this.state.password
    };
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <Wrapper>
        <TitleBox>
          <Title>Peeker</Title>
        </TitleBox>
        <TextInput 
          style={styles.idInput}
          name='email'
          placeholder={'이메일'}
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handleChange('email')}
          ref={(input)=> this.idInput = input}
          onSubmitEditing={()=> this.passwordInput.focus()}
          /> 
          <TextInput 
          style={styles.passwordInput}          
          name='password'
          placeholder={'비밀번호'}
          secureTextEntry
          returnKeyType="go"
          onChangeText={this.handleChange('password')}
          ref={(input)=> this.passwordInput = input}
          /> 
          <ButtonWrapper onPress={this.handleSubmit()}>
            <ButtonText>로그인</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonText>패이스북으로 로그인</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonText>카카오톡으로 로그인</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonText>계정 만들기</ButtonText>
          </ButtonWrapper>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idInput: {
    width: 200, 
    height: 60,
  },
  passwordInput: {
    width: 200, 
    height: 60,
  }
});
