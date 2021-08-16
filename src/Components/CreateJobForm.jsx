import React, { Component } from 'react';

class CreateJobForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
            description:''
		};
	}

    handletitleChange=(event)=>{
        this.setState({
            title:event.target.value
        })
    }

    handleDescChange=(event)=>{
        this.setState({
            description:event.target.value
        })
    }

	render() {
		return (
			<form>
				<div>
					<label>title</label>
					<input type="text" 
                    value={this.state.title} 
                    onChange={this.handletitleChange} />
				</div>
                <div>
                    <label>
                        Description
                    </label>
                    <textarea value={this.state.description} 
                    onChange={this.handleDescChange}></textarea>
                </div>
                <div></div>
			</form>
		);
	}
}
export default CreateJobForm;
