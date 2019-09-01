import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class Testimonials extends Component {
  render() {
    const testimonials = this.props.resumeObj.testimonials;
    return (
      <div>
        <Jumbotron title="Testimonials" subtitle="What my colleagues have to say about me" />
        <div className="container">
          <div>
            {
              testimonials.map((key, index) => 
                <div key={index}>
                  <blockquote class="blockquote">
                    <em class="mb-0">{`“${testimonials[index].testimony}”`}</em>
                    <footer class="blockquote-footer">
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
}

export default Testimonials
