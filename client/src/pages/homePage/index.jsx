import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card, CardContainer } from "../../styles/homepage";

const HomePage=()=>{
    const [data,setData]=useState([])

    const fetchData=async()=>{
        try {
            const response=await axios.get('/data')
            const data=response.data
            console.log(data)
            setData(data)
        } catch (error) {
            console.log('Error getting the data from server',error)
        }   
    }

    const tableStyle={
        borderCollapse: 'collapse',
        width: '100%',
        border: '2px solid black'
    }

    const cellStyle={
        border: '2px solid black',
        padding: "10px",
        textAlign:'left'
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <CardContainer>
        <table style={tableStyle}>
            <tr>
                <th style={cellStyle}>ID</th>
                <th style={cellStyle}>First Name</th>
                <th style={cellStyle}>Last Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Nationality</th>
            </tr>
            {data.map((data,index)=>{
                return(
                    <tbody style={{border:"2px solid black"}}>
                        <td style={cellStyle}>{data.id}</td>
                        <td style={cellStyle}>{data.first_name}</td>
                        <td style={cellStyle}>{data.last_name}</td>
                        <td style={cellStyle}>{data.email}</td>
                        <td style={cellStyle}>{data.nationality}</td>
                    </tbody>
                )
            })}
        </table>
        </CardContainer>
    )
}

export default HomePage