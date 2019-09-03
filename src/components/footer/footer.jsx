import React, { Component } from 'react'

export default class footer extends Component {
	render() {
		return (
			<>
				<footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/m-c-d-m/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/mcdudley87"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/M_C_D_M"><i className="fa fa-twitter" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright CeeVee</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>	
			</>
		)
	}
}
