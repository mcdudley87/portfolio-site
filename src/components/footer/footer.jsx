import React, { Component } from 'react'

export default class footer extends Component {
	render() {
		return (
			<>
				<footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/m-c-d-m/"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://github.com/mcdudley87"><i className="fab fa-github" /></a></li>
              <li><a href="https://twitter.com/M_C_D_M"><i className="fab fa-twitter" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright CeeVee</li>
              <li>Temporary Design Built with <a title="Styleshout" href="http://www.styleshout.com/">Styleshout, </a> Permanent Site Forthcoming.</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>	
			</>
		)
	}
}
