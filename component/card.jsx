import XList from './expList'
import CardFooter from './cardFooter'
import CardHeader from './cardHeader'
import { useState } from 'react'
const Card = ({data}) =>{
    return (
    <div className="card">
        <CardHeader name ={data.name} job = {data.profession} url={data.profile}/>
        <div className="match">76% Match</div>
        <div className='Xlist'>
            <XList exp = {data.experience}/>
        </div>
        <CardFooter social = {data.socialLinks}/>
    </div>)
}
export default Card