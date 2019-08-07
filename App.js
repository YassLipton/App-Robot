import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
 
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
            fetch('http://192.168.1.114/Robot/data_modif2.php',
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
            fetch('http://192.168.1.114/Robot/data_modif2.php',
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

    UnoPlus = () =>
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

    UnoMoins = () =>
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

    DosPlus = () =>
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

    DosMoins = () =>
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
 
    TresPlus = () =>
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

    TresMoins = () =>
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
 
    QuatroPlus = () =>
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

    QuatroMoins = () =>
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
 
    CinqoPlus = () =>
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

    CinqoMoins = () =>
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

              <View style={{width: 320, height: 350}}>
                  <Image style={{flex: 1,}} source={{uri: "http://192.168.1.114/Robot/mano.png"}}></Image>

              </View>

              <Text></Text>

                <TouchableOpacity style = {styles.d11} onPress = {this.UnoPlus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d12} onPress = {this.UnoMoins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d21} onPress = {this.DosPlus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d22} onPress = {this.DosMoins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d31} onPress = {this.TresPlus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d32} onPress = {this.TresMoins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d41} onPress = {this.QuatroPlus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d42} onPress = {this.QuatroMoins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d51} onPress = {this.CinqoPlus}><Text style = {{textAlign: "center"}}>+</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.d52} onPress = {this.CinqoMoins}><Text style = {{textAlign: "center"}}>-</Text></TouchableOpacity>
                
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

    d11:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 250,
      left: 50
    },

    d12:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 300,
      left: 35
    },

    d21:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 210,
      left: 175
    },

    d22:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 250,
      left: 142
    },

    d31:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 240,
      left: 220
    },

    d32:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 270,
      left: 190
    },

    d41:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 200,
      left: 135
    },

    d42:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 200,
      left: 135
    },

    d51:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 200,
      left: 135
    },

    d52:
    {
      backgroundColor: "rgba(69, 255, 216, 0.8)",
      alignSelf: 'stretch',
      width: 40,
      height: 40,
      borderRadius: 20,
      textAlign: "center",
      position: "absolute",
      top: 200,
      left: 135
    },
 
    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
});