import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

function Testimonials(props) {
  const testimonials = props.resumeObj.testimonials

  return (
    <div>
      <Jumbotron title="Testimonials" subtitle="What my colleagues have to say about me" />
      <div className="container">
        <div>
          {
            testimonials.map((key, index) => 
              <div key={index}>
                <blockquote className="blockquote">
                  <em className="mb-0">{`“${testimonials[index].testimony}”`}</em>
                  <footer className="blockquote-footer">
                    {`
                      ${testimonials[index].name}, 
                      ${testimonials[index].position},
                      ${testimonials[index].company}
                    `}
                    </footer>
                </blockquote>
              </div>
              )
          }
        </div>       
      </div>
    </div>
  );
}

export default Testimonials
