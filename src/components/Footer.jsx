import React from 'react';

function Footer(props) {
  const linkedin = props.resumeObj.basics.linkedin
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <span className="text-muted">Ian James Goodwin &#169; {new Date().getFullYear()}</span>

        <div className="float-right">
        	<a href={`https://www.linkedin.com/in/${linkedin}`}>
          	<i className="fab fa-linkedin text-muted pr-1"></i>
          </a>
       	</div>
      </div>
    </footer>
  );
}

export default Footer;
