import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      			<div id="page-wrapper">
					<div id="wrapper">

							<section className="panel banner right">
								<div className="content color0 span-3-75">
									<h1 className="major">Hello, my name<br />
									is Ivan Yung</h1>
									<p>Computer Engineering major at Western University. Always looking for the next new technology to play with.</p>
									<ul className="actions">
										<li><a href="#first" className="button special color1 circle icon fa-angle-right">Next</a></li>
									</ul>
								</div>
								<div className="image filtered span-1-75" data-position="25% 25%">
									<img src="images/me.jpg" alt="" />
								</div>
							</section>

							<section className="panel spotlight medium right" id="first">
								<div className="content span-7">
									<h2 className="major">What Have I Done?</h2>
									<p>Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti. Ut pretium libero eleifend euismod sed tristique. Quisque dictum magna risus, id ultricies justo sagittis vitae. Sed id odio tempor, porttitor elit amet, gravida hendrerit fringilla lorem ipsum dolor.</p>
								</div>
								<div className="image filtered tinted" data-position="top left">
									<img src="images/hw2.jpg" alt="" />
								</div>
							</section>

							<section className="panel color1">
								<div className="intro joined">
									<h2 className="major">What Can I Do?</h2>
									<p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
								</div>
								<div className="inner">
									<ul className="grid-icons three connected">
										<li><span className="icon fa-diamond"><span className="label">Lorem</span></span></li>
										<li><span className="icon fa-camera-retro"><span className="label">Ipsum</span></span></li>
										<li><span className="icon fa-cog"><span className="label">Dolor</span></span></li>
										<li><span className="icon fa-paper-plane"><span className="label">Sit</span></span></li>
										<li><span className="icon fa-bar-chart"><span className="label">Amet</span></span></li>
										<li><span className="icon fa-code"><span className="label">Nullam</span></span></li>
									</ul>
								</div>
							</section>

							<section className="panel spotlight large left">
								<div className="content span-5">
									<h2 className="major">Achievements</h2>
									<p>Mauris a cursus velit. Nunc lacinia sollicitudin egestas bibendum, magna dui bibendum ex, sagittis commodo enim risus sed magna nulla. Vestibulum ut consequat velit. Curabitur vitae libero lorem. Quisque iaculis porttitor blandit. Nullam quis sagittis maximus. Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar.</p>
								</div>
								<div className="image filtered tinted" data-position="top right">
									<img src="images/hw2.jpg" alt="" />
								</div>
							</section>                  

							<section className="panel">
								<div className="intro color2">
									<h2 className="major">Completed Projects</h2>
									<p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
								</div>
								<div className="gallery">
									<a href="images/gallery/fulls/04.jpg" className="image filtered span-2-5" data-position="top"><img src="images/gallery/thumbs/04.jpg" alt="" /></a>
									<a href="images/gallery/fulls/09.jpg" className="image filtered span-2-5" data-position="right"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
								</div>
							</section>

							<section className="panel color4-alt">
								<div className="intro color4">
									<h2 className="major">Contact</h2>
									<p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
								</div>
								<div className="inner columns divided">
									<div className="span-3-25">
										<form method="post" action="#">
											<div className="field half">
												<label htmlFor="name">Name</label>
												<input type="text" name="name" id="name" />
											</div>
											<div className="field half">
												<label htmlFor="email">Email</label>
												<input type="email" name="email" id="email" />
											</div>
											<div className="field">
												<label htmlFor="message">Message</label>
												<textarea name="message" id="message" rows="4"></textarea>
											</div>
											<ul className="actions">
												<li><input type="submit" value="Send Message" className="button special" /></li>
											</ul>
										</form>
									</div>
									<div className="span-1-5">
										<ul className="contact-icons color1">
										</ul>
									</div>
								</div>
							</section>

							<div className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

					</div>

			</div>


    );
  }
}

export default App;
