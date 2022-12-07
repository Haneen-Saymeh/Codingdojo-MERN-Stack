import React, {Component} from 'react';

class BirthdayCard extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:this.props.age,
        };
     
    }
    myfun =() => {
        this.setState({counter:this.state.counter+1})
    }


    render(){
        return (
<div  className='main' >
    <h1>{this.props.firstname} {this.props.lastname}</h1>
    <p>{this.state.counter}</p>
    <p>{this.props.hair}</p>
    <button  onClick={this.myfun} >Birthday Button</button>
</div>
        )
    }
}

export default BirthdayCard;