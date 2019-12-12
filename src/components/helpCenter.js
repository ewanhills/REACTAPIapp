import React, { Component } from 'react';


const API = 'AIzaSyD0KhyRE8o9iElV9b92MK4hHJm8n7VpHwo'
const channelId = 'UCuTIsN1tlEzr5a8bWX2KDew'
const result = '10';


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`


class helpCenter extends Component {
   
   constructor(props){
    super(props);
    //where the data from youtube will be stored
    this.state = {
    resultyt: []

    };
    this.clicked = this.clicked.bind(this);
   }
   
   clicked(){
       fetch(finalURL)
       .then((response) => response.json())
       .then((responseJson) => {
          // console.log(responseJson);
         const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
         this.setState({resultyt});
           })
           
           .catch((error) => {
               console.error(error);
           });
        }
   
    
   
   
   
    render(){
       console.log(finalURL);
       console.log(this.state.resultyt);
    return(
        <div>
            <button onClick={this.clicked}>Get Help Videos</button>      
          {
            this.state.resultyt.map((link,i ) => {
                console.log(link);
                var frame = <div className="helpCenter"> <iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
            return frame;
            })
          }
            {this.frame}

       
</div>

        );
  }
}

export default helpCenter;  