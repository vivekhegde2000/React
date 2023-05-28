import React, { useEffect } from 'react';
import style from "./homecrud.module.css"
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    let [name ,setName]=useState("")
    let [salary,setSalary]=useState(0)
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let {abc}=useParams()
    console.log(abc);

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

   

    useEffect(()=>{
        axios.get(`http://localhost:3000/Employees/${abc}`)
        .then((response)=>{
            // console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("Something went wrong");
        })
    },[])

    let formHandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/Employees/${abc}`,payload)
        .then(()=>{
            console.log("Updated the data");
        })
        .catch(()=>{
            console.log("Something went wrong!");
        })

        navigate("/users")
    }


    return (
        <div id={style.myform}>
          <form>
            <h1>UPDATE USER</h1>
            <label>Name : </label>
            <input type="text" value={name} onChange={nameData}/><br />
            <label>Salary : </label>
            <input type="number" value={salary} onChange={salaryData}/><br />
            <label>Company : </label>
            <input type="text" value={company} onChange={companyData}/><br />
            <button onClick={formHandle}>Update</button>
          </form>
        </div>
    );
};

export default EditUser;