import React from 'react';
import {   Link } from "react-router-dom";

import {useState,useEffect} from 'react';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/Navbar';
//import { Table } from 'reactstrap';
const ViewBooking=()=>
{
  const[booking,setBooking]=useState([]);
  useEffect(()=>{
   getBooking();
   getData();
  

  },[]);
  
 const getBooking =async()=>{
  let result=await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
  result= await result.json();
  setBooking(result);
 }

 
/*console.warn(books);
 async function deleteOperation(bookingId)
    {
      let result=await  fetch("/TRAIN-MANAGEMENT-SERVICE/train/delete/"+trainId,{
        method:'DELETE'});
      result=await result.json();
      console.warn(result);
      getData();
      
    }*/
  

   


  async  function getData()
    {
        let result=await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
  result= await result.json();
  setBooking(result);
    }



    
  return(
           
    <div
      style={{
        backgroundColor: 'lightblue',
        width: '1500px',
        height: '1500px'
      }}
    >
  <div className="booking-list">  <Link to={`/admindashboard`}>Admin DashBoard</Link>

    <h3>BOOKING LIST</h3>
    <table className="table table-bordered table-striped">
                <thead>
               
                    <th>TRAIN NAME</th>
                <th> PASSENGER NAME</th>
                <th> PASSENGER EMAIL</th>
                <th>  SOURCE</th>
                <th> DESTINATION</th>
                <th> SEATS</th>
                <th> PHONE NUM</th>
                <th> CLASS NAME</th>
             
                   
                </thead>
                <tbody>
                    {
                        booking.map(
                            items =>
                            <tr key = {items.trainName}> 
                                <td> {items.trainName} </td>
                                <td>{items.passengerName}</td>
                            <td>{items.email}</td>
                            <td>{items.source}</td>
                            <td>{items.destination}</td>
                            <td>{items.seats}</td>
                            <td>{items.phone}</td>
                            <td>{items.className}</td>
                              
                              
                        
 
                                
                            </tr>
                        )
                        }
                </tbody>
              
            </table>
    
    
  </div>
  </div>
)
    
}  
export default ViewBooking;
