import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';

class BetterProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped}));
    }

render() {
  return (
      <div>
    
    <ReactCardFlip className="test" isFlipped={this.state.isFlipped} flipDirection="horizontal" >

        <div className="card">
            <div className="content">
                <div className="front" >
                   
                        <h2>Cozy apartment</h2>
                        <button onClick={this.handleClick}>Click to flip</button>
                    </div>
                </div>
        </div>

        <div className="card">        
                    <div className="inner">
                        <div className="info">
                            <span>links</span>
                            <div className="icon">
                                <i className="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div className="description1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                        </div>                        
                        <button onClick={this.handleClick}>Click</button>
                    </div>
        </div> 

    </ReactCardFlip>
    


<ReactCardFlip className="test2" isFlipped={this.state.isFlipped} flipDirection="horizontal" >

<div className="card">
    <div className="content">
        <div className="front" >
           
                <h2>Cozy apartment</h2>
                <button onClick={this.handleClick}>Click to flip</button>
            </div>
        </div>
</div>

<div className="card">        
            <div className="inner">
                <div className="info">
                    <span>links</span>
                    <div className="icon">
                        <i className="fas fa-users"></i>
                        <span>people</span>
                    </div>
                </div>
                <div className="description1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                        ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                        tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                </div>                        
                <button onClick={this.handleClick}>Click</button>
            </div>
</div> 

</ReactCardFlip>


</div>
    
    
    
    
        );
  
    }
}
export default BetterProject;