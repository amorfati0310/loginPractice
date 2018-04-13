import React, {Component} from 'react';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleChange = name => text => {
        console.log('name', name, 'text', text)
        this.setState({
            [name]: text
        });
    };
    render(){
        return (
            <View style={styles.container}>
                <Text>Peeker</Text>
                <TextInput 
                style={styles.idInput}
                name='email'
                placeholder={'이메일'}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.handleChange('email')}
                /> 
                <TextInput 
                style={styles.passwordInput}          
                name='password'
                placeholder={'비밀번호'}
                secureTextEntry
                returnKeyType="go"
                onChangeText={this.handleChange('password')}
                /> 
            </View>
        )
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
