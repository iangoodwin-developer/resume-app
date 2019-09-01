import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Redirect } from 'react-router-dom';
import './styles.scss';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './pages/Skills.jsx';
import Testimonials from './pages/Testimonials.jsx';


class App extends Component {

  render() {

    const resume = this.props.data.resume;
    const pages = this.props.data.site.pages;
    return (
        <HashRouter>
          <div>
            <Navbar pages = {pages}/>
            <Route 
              exact path="/" 
              render={() => <Redirect to="/About" />}
            />
            <Route 
              path="/Skills/" 
              render={({match}) => <Skills resumeObj={resume}/>}
            />
            <Route 
              path="/About/" 
              render={({match}) => <About resumeObj={resume}/>}
            />
            <Route 
              path="/Experience/" 
              render={({match}) => <Experience resumeObj={resume}/>}
            />
            <Route 
              path="/Education/" 
              render={({match}) => <Education resumeObj={resume}/>}
            />
            <Route 
              path="/Testimonials/" 
              render={({match}) => <Testimonials resumeObj={resume}/>}
            />
            <Route 
              path="/Contact/" 
              render={({match}) => <Contact resumeObj={resume}/>}
            />
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default App;
