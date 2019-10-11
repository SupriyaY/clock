import React from 'react';
import Beach from './img/beach.jpg';
import styled from 'styled-components';



const Background = styled.div`
background: url(${Beach}) center no-repeat;
background-size: cover;
min-width: 100vw;
min-height: 100vh;
z-index: -999;
display: flex:
justify-content: center;
align-items: center;
`

const Center = styled.div`
padding-top: 20px;
display: flex;
justify-content: center;
align-items: center;
color: black;
font-family: 'Patua One';
font-size: 5rem;
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: black;
font-family: 'Patua One';
font-size: 4rem;
font-weight: bold;
`

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }

        //bind a function so it won't lose track of this
        this.updateClock = this.updateClock.bind(this);
    }

//set interval
 componentDidMount(){
    this.intervalID = setInterval(
     () => this.updateClock(),   
    this.updateClock, 
    1000
);
    }

    //clear interval
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

//modify time property of the state object

    updateClock(){
        console.log(this);
this.setState({
    time: new Date().toLocaleString()
});
    }
render(){
    return(
    <div>
        <Background>
            <Center>
        <p>Hello {this.props.name}</p> 
        </Center>
        <Content>
          <p>The current date and time is: {this.state.time}</p>
            </Content>
</Background>
        </div>

    )
}

}

export default Clock;