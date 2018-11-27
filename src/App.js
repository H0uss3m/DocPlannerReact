import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import DescreptionBox from './DescreptionBox';
import Services from './Services';
import Brands from './Brands';
import Stats from './Stats';
import Offices from './Offices';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
        <NavBar />
        <DescreptionBox />
        <Services />
        <Brands />
        <Stats />
        <Offices />
        <Footer />
      </Grid>
      </div>
    );
  }
}

export default App;
