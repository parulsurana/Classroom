import React from "react";
import './GenderForm.css';

class GenderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Null'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} id="gender" >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </form>
    );
  }
}

export default GenderForm;