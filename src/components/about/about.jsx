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
            <p>Freelance web developer and career changer. Graduate of General Assembly's Software Engineering Immersive.
              I work to bring interaction and reaction through engaging applications, 
              captivating content, and striking design. I strive to build human community and technological accessibility to mold a 
              more unified world. My work history includes 7 years medical experience working with diverse patient base, 15 years 
              writing / entertainment experience, and 11 years client-facing customer service and patient care experience.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>Michael Dudley-Marquez</span><br />
                  <span>Seattle, WA
                  </span><br />
                  <span>m-c-d-m@outlook.com</span><br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
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
