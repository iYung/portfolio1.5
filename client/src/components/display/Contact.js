import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
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
    );
  }
}

export default Contact;
