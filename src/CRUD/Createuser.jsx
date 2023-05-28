import React, { useState } from 'react';
import style from './homecrud.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Createuser = () => {

  let [name ,setName]=useState("")
  let [salary,setSalary]=useState(0)
  let [company,setCompany]=useState("")

  let abc=useNavigate()

  let setData1=(e)=>{
    setName(e.target.value)
  }
  let setData2=(e)=>{
    setSalary(e.target.value)
  }
  let setData3=(e)=>{
    setCompany(e.target.value)
  }
  let formHandle=(e)=>{
    e.preventDefault()
    // console.log(name,salary,company)
    let payload = {name , salary , company}
    axios.post("http://localhost:3000/Employees",payload)
    .then(()=>{
      console.log("Dat has been Stored Successfully!");
    }).catch(()=>{
      console.log("Data is not Stored!!");

    })
    abc("./users")
  }
    return (
        <div id={style.myform}>
          <form>
            <label>Name : </label>
            <input type="text" value={name} onChange={setData1}/><br />
            <label>Salary : </label>
            <input type="number" value={salary} onChange={setData2}/><br />
            <label>Company : </label>
            <input type="text" value={company} onChange={setData3}/><br />
            <button onClick={formHandle}>Submit</button>
          </form>
        </div>
    );
}

export default Createuser;