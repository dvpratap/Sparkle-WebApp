import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";


const SearchBar =() => {
    const [searchInput, setSearchInput] = useState("");
    const [searcherrors, setsearcherrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    let navigate = useNavigate();

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setsearcherrors(validate(searchInput));
        setisSubmit(true);
    };

    const validate = (values) =>{
        const errors = {};
        const regex = /^[0-9]{4,8}$/i;
        if(!values){
            errors.msg = "Jewelry id is required !!"
        }
        else if(!regex.test(values)){
            errors.msg = "jewelry id should be numeric and 4-8 digits";
        }
        return errors;
    };

    useEffect(() => { 
        console.log(searcherrors);
        if(Object.keys(searcherrors).length === 0 && isSubmit){
            console.log(searchInput);
            navigate( '/details',{ state: searchInput});
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    },[searcherrors]);
     
  return (
    <div >
        <div className="div-style"></div>
        <div className="error-msg">{searcherrors.msg}</div>
      <form className="search-style" onSubmit={handleSubmit}>
      <input className="form-control mr-sm-2" type="search" placeholder="Enter Jewelry id..." value={searchInput} aria-label="Search" onChange={handleChange} ></input>
      <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>

  );
}

export default SearchBar;