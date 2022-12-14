import React, { Component } from "react";
import './App.css';
import loader from './assets/JJ.gif';
import { About, Contact, Footer, Hero, Navbar, Projects } from "./components";


export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    
    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return (
    //     <div className="loader">
    //       <img src={ loader } alt="loader" />
    //     </div>
    //   );
    // }
    return (
      <div class="main-page">
        <div className="Portfolio">
          <div className="page-bg">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
          {/* <Footer /> */}
        
        </div>
        
        <div className="sidebar">
          ~
        </div>
      </div>
    );
  }
  
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
