import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';

function Bookingemail()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[email,setEmail] = useState('');
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/BOOKING-MANAGEMENT-SERVICE/book/listallbookings/${email}`)
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
              <h3 className='mb-3'>Search booking by entering emailid</h3>  
              <form onSubmit={handleSubmit}>              
                <div className="col-md-6">                
                <input type="text" name='name' value={email}   className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Search...' />
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
                  <th>train id</th>
                  <th>train Name</th>
                  <th>passengerName</th>
                  <th>Email</th>
                  <th>phone</th>
                 
                  <th>source</th>
                  <th>destination</th>
                  <th>Class name</th>
                  
                  <th>seats</th>
                 
                </tr>
              </thead>
              <tbody>
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getTrain.bookingId}</td>
                  <td>{getTrain.trainName}</td>
                  <td>{getTrain.passengerName}</td>
                  <td>{getTrain.email}</td>
                  <td>{getTrain.phone}</td>
               
                  <td>{getTrain.source}</td>
                  <td>{getTrain.destination}</td>
                  <td>{getTrain.className}</td>
                  
                  <td>{getTrain.seats}</td>
                 

                 
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



  

export default Bookingemail;