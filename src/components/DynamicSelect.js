// import React from "react";
// import './GenderForm.css';

// class GenderForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'Null'};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }


//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <select value={this.state.value} onChange={this.handleChange} id="gender" >
//             <option value={"Male"}>Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//       </form>
//     );
//   }
// }

// export default GenderForm;

import React, {Component} from 'react';
import './DynamicSelect.css';

class DynamicSelect extends Component{
    // constructor(props){
    //     super(props)
    // }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.name}
                </option>
            );
        
            return (
            <select id="select" name="customSearch" className="custom-search-select" onChange={this.handleChange}>
                <option>Select</option>
                {options}
           </select>
        )
    }
}

export default DynamicSelect;