import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
							<section className="panel">
								<div className="intro color2">
									<h2 className="major">Completed Projects</h2>
									<p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
								</div>
								<div className="gallery">
									<a href="images/gallery/fulls/04.jpg" className="image filtered span-2-5" data-position="top"><img src="images/gallary.jpg" alt="" /></a>
									<a href="images/gallery/fulls/09.jpg" className="image filtered span-2-5" data-position="right"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
								</div>
							</section>
    );
  }
}

export default Projects;
