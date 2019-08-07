import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
 
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.state = { varia : 0, loading: false, disabled: false };

        num = 0;
    }

    Plus = () =>
    {
      var newCount = this.state.varia + 1;
      this.setState({varia: newCount });
    }

    Moins = () =>
    {
      var newCount = this.state.varia - 1;
      this.setState({varia: newCount });
    }

    saveData = () =>
    {
        this.setState({ loading: true, disabled: true }, () =>
        {
            fetch('http://192.168.1.114/Robot/data_add.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                    varia: this.state.varia
                })
 
            }).then((response) => response.text()).then((responseJson) =>
            {
                alert(responseJson);
                this.setState({ loading: false, disabled: false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ loading: false, disabled: false });
            });
        });
    }
 
    render()
    {
        return(
            <View style = { styles.container }>

              <Text>{this.state.varia}</Text>

                <TouchableOpacity style = {styles.Btn2} onPress = {this.Plus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.Btn2} onPress = {this.Moins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>

                <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.saveData }>
                    <Text style = { styles.btnText }>Envoyer</Text>
                </TouchableOpacity>
 
                {
                    (this.state.loading)
                    ?
                        (<ActivityIndicator size = "large" />)
                    :
                        null
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    textInput:
    {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16
    },
 
    Btn:
    {
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 10,
        marginBottom: 25
    },

    Btn2:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 50,
      height: 50,
      borderRadius: 25,
      textAlign: "center",
      marginTop: 20

    },
 
    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
});