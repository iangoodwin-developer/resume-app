import React, { Component } from 'react';

class SkillModal extends Component {
  render() {
  	const modalIndex = this.props.modalIndex
  	const modalTitle = this.props.type
  	const progress = this.props.progress

    return (

		  <div 	className="modal fade" id={`modal-${modalIndex}`}
		  		tabIndex="-1" 
		  		role="dialog" 
		  		aria-labelledby={`modalLabel-${modalIndex}`} 
		  		aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id={`modalLabel-${modalIndex}`}>{modalTitle} competency level</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        <div className="progress">
							  <div className={`progress-bar w-${progress / 4 * 100}`} 
							  			role="progressbar"  
							  			aria-valuenow="25" 
							  			aria-valuemin="0" 
							  			aria-valuemax="100">
							  </div>
							</div>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

    );
  }
}

export default SkillModal;