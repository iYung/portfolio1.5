import React, { Component } from 'react';
import './App.css';
import Intro from './components/display/Intro'
import Skills from './components/display/Skills'
import Achievements from './components/display/Achievements'
import Projects from './components/display/Projects'
import Contact from './components/display/Contact'

class App extends Component {
  render() {
    return (
      			<div id="page-wrapper">
					<div id="wrapper">

							<Intro />

							<section className="panel spotlight medium right" id="first">
								<div className="content span-7">
									<h2 className="major">What Have I Done?</h2>
									<p>Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti. Ut pretium libero eleifend euismod sed tristique. Quisque dictum magna risus, id ultricies justo sagittis vitae. Sed id odio tempor, porttitor elit amet, gravida hendrerit fringilla lorem ipsum dolor.</p>
								</div>
								<div className="image filtered tinted" data-position="top left">
									<img src="images/hw2.jpg" alt="" />
								</div>
							</section>
							
							<Skills />

							<Achievements />                 

							<Projects />

							<Contact />

							<div className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

					</div>

			</div>


    );
  }
}

export default App;
