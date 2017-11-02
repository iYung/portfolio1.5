import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
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
    );
  }
}

export default Intro;
