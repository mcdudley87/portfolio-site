import React, { Component } from 'react'

export default class about extends Component {
	render() {
		return (
			<>
				<section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <div className="about-me">
              Freelance web developer. Graduate of General Assembly's Software Engineering Immersive.
              I work to bring interaction and reaction through engaging applications, captivating content, 
              and striking design. I strive to build human community and technological accessibility to mold a 
              more unified world. 
                <p className="tech-icons">
                <i class="fab fa-html5 fa-5x"></i> {' '}
                <i class="fab fa-css3 fa-5x"></i> {' '}
                <i class="fab fa-js fa-5x"></i> {' '}
                <i class="fab fa-node-js fa-5x"></i> {' '}
                <i class="fab fa-react fa-5x"></i>  
              </p>
            </div>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>Michael Dudley-Marquez</span><br />
                  <span>Seattle, WA
                  </span><br />
                  <span>m-c-d-m@outlook.com</span><br />
                  <a href="images/dudley-marquez-resume.pdf" class="icon" target="blank"><i class="fas fa-file"></i> View or Download my Resume</a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  {/* <a href="#" className="button"><i className="fa fa-download" />Download Resume</a> */}
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
			</>
		)
	}
}
