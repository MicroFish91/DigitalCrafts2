import React from "react";
import  './styles.css'

const AddressLabel = (props) => {
  return <>
  
    <div className="m-5 addressBox">
        <b>{props.name}</b> <br />
        {props.address}
         <br />
        {props.city}, {props.state} {props.zip} <br />
    </div>
    
  </>;
};

AddressLabel.defaultProps = {
    name: "Veronica Lino",
    address: "915 Franklin St.", 
    city: "Houston",
    state: "TX", 
    zip: "77002"
};



export default AddressLabel;
