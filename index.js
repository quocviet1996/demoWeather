/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {View,
        Text,
        ImageBackground,
        Image,
        FlatList,

        
    } 
    from 'react-native';
import React, { Component } from 'react';
import styles from './style/styles';
const keyApi = "b6ec83cb76484b054e6ee4510e7542ef";
const url = "http://api.openweathermap.org/data/2.5/weather?";
const urlList = "http://api.openweathermap.org/data/2.5/forecast?";
const arrDay = ["Chủ nhật","Thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy"]


export default class index extends Component {
    renderDay(item){
      
           let date = new Date(item.dt);
           let day = date.getDay();
        
           return (<View style={{flexDirection:'row',flex:1}}><Text style={{fontSize:20,color:"white",padding:15,magin:10}}>{arrDay[day]}</Text>
           {this.state.weather &&  this.state.weather.weather.map((arr) => this.renderIconWeatherForecast(arr.description))}
           <Text style={{fontSize:15,color:"white",alignItems:'flex-end',marginTop:20}}>{item.main.temp}</Text>
           </View> )

    }
    renderIconWeatherForecast(description){
        let urlImage = null;
        switch(description){
            case "clear sky":
                urlImage = require("./img/01d.png");
                break;
            case "few clouds" :
                    urlImage = require("./img/02d.png");
                break;
            case "scattered clouds" :
                    urlImage = require("./img/03d.png");
                break;
            case "broken clouds" :
                    urlImage = require("./img/04d.png");
                break;
            case "shower rain" :
                    urlImage = require("./img/09d.png");
                break;
            case "rain" :
                    urlImage = require("./img/10d.png");
                break;
            case "thunderstorm" :
                    urlImage = require("./img/11d.png");
                break;
            case "snow" :
                    urlImage = require("./img/13d.png");
                break;
             case "mist" :
                    urlImage = require("./img/50d.png");
                 break;
            case"overcast clouds":
            urlImage = require("./img/04d.png");
            break
        }
       return <View style={{flex:1}} >
         <Image style={{height:35,width:35,marginTop:15}} source={urlImage}> 
        </Image>
        </View>
                                      

        }

    renderIconWeather(description){
        let urlImage = null;
        switch(description){
            case "clear sky":
                urlImage = require("./img/01d.png");
                break;
            case "few clouds" :
                    urlImage = require("./img/02d.png");
                break;
            case "scattered clouds" :
                    urlImage = require("./img/03d.png");
                break;
            case "broken clouds" :
                    urlImage = require("./img/04d.png");
                break;
            case "shower rain" :
                    urlImage = require("./img/09d.png");
                break;
            case "rain" :
                    urlImage = require("./img/10d.png");
                break;
            case "thunderstorm" :
                    urlImage = require("./img/11d.png");
                break;
            case "snow" :
                    urlImage = require("./img/13d.png");
                break;
             case "mist" :
                    urlImage = require("./img/50d.png");
                 break;
            case"overcast clouds":
            urlImage = require("./img/04d.png");
            break

                                      

        }
        return <View style={{flexDirection:'row',marginLeft:15}}>
         <Image style={{height:26,width:26}} source={urlImage}> 
        </Image>
        <Text style={{color:"white"}}>{description}</Text>
        </View>
    }

componentDidMount(){
     navigator.geolocation.getCurrentPosition((data) =>{
        this.setState({coords:data.coords})
        if (this.state.coords != null){
            fetch(url + "lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude + "&appid=" + keyApi + "&units=metric")
            //console.log(url + "lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude + "&appid=" + keyApi + "&units=metric")
            .then((response) => response.json())
            .then((responseJson) => this.setState({weather:responseJson}));

            fetch(urlList + "lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude  +"&appid=" + keyApi  + "&units=metric" )
           // console.log(urlList + "lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude  +"&appid=" + keyApi  + "&units=metric"  )
             .then((response) => response.json())
             .then((responseJson) => this.setState({data:responseJson.list}))
            
        }
     },(error) => console.log("error is" + error),geoOptions)
}
    constructor(props){
        super(props);
        geoOptions = {
            timeout:2000,
            maximumAge:1900,
            enableHighAccuracy : true
        }
        this.state={
            coords:null,
            weather:null,
            data :null,
        }
        

    }
    
    render() {
        return (
           <ImageBackground resizeMode= "cover" style={styles.container} source={require('./img/giphy.gif')}> 
           <View style = {styles.body}> 
           <View style = {styles.containerItem}> 
           <FlatList
           data = {this.state.data}
           renderItem={({item}) => this.renderDay(item)
        
        
           
                // <Text>{item.main.temp}</Text>
        //    let date = new Date(item.dt);
        //    let day = date.getDay();
        //    <Text>{arrDay[day]}</Text>
        
        

        }
            keyExtractor = {(item) => item.weather.id}
           >

           </FlatList>
           </View>

           </View>
           <View style={styles.footer}>
               <Text style = {styles.temp}>
                  
               {this.state.weather && this.state.weather.main.temp_max}
               </Text>
               <Text style={{fontSize:30,color:'white'}}>
                0
               </Text>
               <View style={{}}>
                   <Text style={{color:"white",fontSize:15,marginTop:5,marginLeft:20}}>{this.state.weather && this.state.weather.name}</Text>
                   <View style={{flexDirection:'row',flex:1}}>
                    {this.state.weather &&  this.state.weather.weather.map((arr) => this.renderIconWeather(arr.description))}
                   <Image source={require("./img/temperature.png")} style={{height:26,width:26}}>
                   </Image>
                   <Text style={{color:"white"}} >
                   {this.state.weather && this.state.weather.main.temp_min}
                   </Text>
               </View>
            
               </View>
                {/* {this.renderDate(this.state.data)} */}

           </View>
              
           </ImageBackground>
        )
    }
}

AppRegistry.registerComponent(appName, () => index);
