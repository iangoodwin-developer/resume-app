import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import './styles.scss';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Footer from './components/Footer.jsx';
import Links from './pages/Links.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './pages/Skills.jsx';
import Testimonials from './pages/Testimonials.jsx';


function App(props) {
  const resume = props.data.resume
  const pages = props.data.site.pages

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
            path="/Links/" 
            render={({match}) => <Links resumeObj={resume}/>}
          />
          <Route 
            path="/Contact/" 
            render={({match}) => <Contact resumeObj={resume}/>}
          />
          <Footer resumeObj={resume}/>
        </div>
      </HashRouter>
  );
}

export default App;
