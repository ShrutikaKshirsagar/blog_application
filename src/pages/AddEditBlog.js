import React, {useState} from 'react';
import {MDBValidation, MDBInput, MDBtn} from "mdb-react-ui-kit";
import {useNavigate, userNavigate} from "react-router-dom"
import axios from "axios";
import {toast} from "react-toastify";

//rgo12uej
const initialState ={
  title: "",
  description: "",
  category: "",
  imageUrl: ""
}

const options =["Travel", "Food", "Tech", "Sports", "Fashion"]



const AddEditBlog = () => {
  const [formValue, setFormValue]= useState(initialState);
  const [categoryError, setCatergoryErrMsg]= useState(null);
  const {title, description, category, imageUrl} = formValue;
const navigate = useNavigate();

  const handleSubmit = () => {};
  return (
   <MDBValidation className='row g-3' style={{marginTop: "100px"}} noValidate onSubmit={handleSubmit}>
<p className="fs-2 fw-bold" > Add Blog </p>
<div  
style={{margin: "auto",
padding: "15px",
maxWidth: "400px",
aligncontent: "center"}}
> 
<MDBInput 
value={title || ""}
name= "title"
type="text"
onChange={onInputChange}
required
label="Title"
validation="Please provide a title"
invalid
/>
<br />

<MDBInput 
value={description || ""}
name= "description"
type="file"
onChange={(e) => onUploadImage(e.target.files)}
required
label="description"
validation="Please provide a description"
invalid
/>
<br />

<select 
className='categoryDropdown'
 onChange={onCatergoryChnage} value={category} /> 
<option>Please select category</option>
{options.map((option, index) =>(<option value={option || ""} key={index}>{option}
</option>
) )}

{/* </select> */}
<br/> <br/>
<MDBtn type="submit"  style={{marginRight: "10px"}}>Add</MDBtn>
<MDBtn color="danger" style={{marginRight: "10px"}} onClick={()=>navigate("/")}>Go Back</MDBtn>
</div>
 </MDBValidation>
  );
};

export default AddEditBlog
