import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
 
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.state = { varia : 0, rt: 0, loading: false, disabled: false };

        num = 0;
    }

    componentWillMount() {
      this.setState( () =>
        {
            fetch('http:// /* IP Serveur */ /Robot/data_modif.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
 
            }).then((response) => response.text()).then((responseJson) =>
            {
                this.setState({ loading: false, disabled: false, rt: responseJson });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ loading: false, disabled: false });
            });
        });
    }

    saveData = () =>
    {
        this.setState({ loading: true, disabled: true }, () =>
        {
            fetch('http://192.168.1.114/Robot/data_modif.php',
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
                this.setState({ loading: false, disabled: false, rt: responseJson });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ loading: false, disabled: false });
            });
        });
    }

    Plus = () =>
    {
    if (this.state.varia >= 0 && this.state.varia <= 50) {
      var newCount = this.state.varia + 10;
    }
    else {
        var newCount = 60;
    }
      this.setState({varia: newCount });
      this.saveData ()
    }

    Moins = () =>
    {
    if (this.state.varia >= 10 && this.state.varia <= 60) {
        var newCount = this.state.varia - 10;
        }
    else {
        var newCount = 0;
    }
      this.setState({varia: newCount });
      this.saveData ()
    }
 
    render()
    {
        return(
            <View style = { styles.container }>

              <View style = {{width: 200, height: 50, backgroundColor: "red", transform: [{rotate: this.state.varia + 'deg'}]}}>

              </View>

              <Text></Text>

                <TouchableOpacity style = {styles.Btn2} onPress = {this.Plus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.Btn2} onPress = {this.Moins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>
                
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
      marginTop: 20,
      marginLeft: 250

    },
 
    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
});
