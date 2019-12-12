import React, { Component} from 'react';
import { Grid, Cell} from 'react-mdl'
import ceramics from '../ceramics.jpg'


class Landing extends Component {
    

    render() {
        return(
            <div style={{width: 'auto',height:'auto', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
            <img
            src={ceramics} alt="background for home page need to changer at a later date"
           alt="ceramics"
           className="ceramics-img"
           />
           <div className="banner-text">
               <h1>Ceramic artist</h1>
               <hr/>
               <p>Ceramics | Pottery| HandMade</p>

               {/* Icons Youtube*/}
           <div className="social-links">
           <script src="https://kit.fontawesome.com/733ba02f09.js" crossorigin="anonymous"></script>
           <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
           <i class="fab fa-youtube-square"></i>
           </a>

            {/* INSTAGRAM*/}
           
           <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
           <i class="fab fa-instagram"></i>
           </a>

            {/* Facebook*/}
           
           <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
           <i class="fab fa-facebook"></i>
           </a>

            {/* Twitter*/}
            
           <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
           <i class="fab fa-twitter-square"></i>
           </a>
           </div>
           </div>
                   </Cell>
                </Grid>
                </div>
            
        )

        }
    }

    export default Landing;  