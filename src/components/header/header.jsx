import React, { Component } from 'react'

export default class header extends Component {
	render() {
		return (
			<>
				<header id="home">
					<nav id="nav-wrap">
						<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
						<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
						<ul id="nav" className="nav">
							<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
							<li><a className="smoothscroll" href="#about">About</a></li>
							<li><a className="smoothscroll" href="#resume">Resume</a></li>
							<li><a className="smoothscroll" href="#portfolio">Projects</a></li>
							{/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
							<li><a className="smoothscroll" href="#contact">Contact</a></li>
						</ul> {/* end #nav */}
					</nav> {/* end #nav-wrap */}
					<div className="row banner">
						<div className="banner-text">
							<h1 className="responsive-headline">M C D M</h1>
							<h3>I am Michael Cameron Dudley-Marquez. Seattle based <span>full-stack</span> and <span>front-end</span> <span>web developer</span>. 
								Learn more <a className="smoothscroll" href="#about">about me </a> 
								and <a className="smoothscroll" href="#portfolio">my work</a>.
							</h3>
							<hr />
							<ul className="social">
								<li><a href="https://www.linkedin.com/in/m-c-d-m/"><i className="fa fa-linkedin" /></a></li>
								<li><a href="https://github.com/mcdudley87"><i className="fa fa-github" /></a></li>
								<li><a href="https://twitter.com/M_C_D_M"><i className="fa fa-twitter" /></a></li>
							</ul>
						</div>
					</div>
					<p className="scrolldown">
						<a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
					</p>
      </header>
			</>
		)
	}
}
