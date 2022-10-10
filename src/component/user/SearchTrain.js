import React, { useState, useEffect } from 'react';
import {   Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from 'axios';

function SearchTrain()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[destination,setDestination] = useState('');
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/TRAIN-MANAGEMENT-SERVICE/train/listalltrains");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/TRAIN-MANAGEMENT-SERVICE/train/listalltrains/${destination}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}

  


  return(
    <React.Fragment>             
    <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpapercave.com/wp/wp8731587.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1200px' ,
        height:'700px' ,
    }}> 

      
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search Train by DESTINATION</h3>  <h5><Link to={`/userdashboard`}>UserDashboard</Link></h5>
              <form onSubmit={handleSubmit}>              
                <div className="col-md-6">                
                <input type="text" name='name' value={destination}   className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder='Search...' />
              </div>          
            
<div className="col-md-1">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="col-md-1">
<button type="submit" className="btn btn-primary">Reset</button>
</div>
</form>
</div>



            <div className='col-md-12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Sr. No </th>
                 
                  <th>train Id</th>
                  <th>train Name</th>
                  <th>source</th>
                  <th>destination</th>
                  <th>price</th>
                  <th>Time of arrival</th>
                  <th>Time of departure</th>
                  <th>Total no of seats</th>
                  <th>Class name</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <tr key={index}>
                  <td>{index+1} </td>
                  
                  <td>{getTrain.trainId}</td>
                  <td>{getTrain.trainName}</td>
                  <td>{getTrain.source}</td>
                  <td>{getTrain.destination}</td>
                  <td>{getTrain.price}</td>
                  <td>{getTrain.timeOfArrival}</td>
                  <td>{getTrain.timeOfDeparture}</td>
                  <td>{getTrain.totalNumOfSeats}</td>
                  <td>{getTrain.className}</td>
                 
                 
                  </tr>

                    )
                    )
                  
                  ):(

                    <tr>
                      <td>Records not found</td>
                    </tr>
                  )
                }
                  
                  
                    
              </tbody>
            </table>
            </div>
        </div>
      </Container>
      </div>
        </React.Fragment>
        
    );
}



  

export default SearchTrain;