import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {

const [state,setState]=useState(false)

 
    const [data,setData]=useState([])
    const fetchData=(page)=>{
      return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}`).then(res=>res.json())
      .then(res=>res.data)
      .catch(err=>console.log(err))
    }
  
    useEffect(()=>{ 
      let arr=[]
    for(let i=1;i<=7;i++){
      arr.push(fetchData(i))
    }
    Promise.all(arr).then(res=>{
      let ans=[];
      res.forEach(el=>{
        ans=[...ans,...el]
      })
      setData(ans)

    })
  
    },[])
   function change(){
    setState(prev=>!prev)
   }
 
    
  return (
    <div>
      <button
        data-testid="sorting-btn"
        onClick={change}
      >
       {state?"Top 10 Employees":"Bottom 10 Employees"}
      </button>
      <div  >
      {data.sort((a,b)=>{
          if(!state){
            return b.salary-a.salary
          }
          return a.salary-b.salary
        }).filter((el,i)=>i<10).map((el,i)=><div key={i}  data-testid="employee-data" >
          
          <EmployeeName name={el.name}/><EmployeeSalary salary={el.salary}/></div>)}

      </div>

     
      
    </div>
  );
};
