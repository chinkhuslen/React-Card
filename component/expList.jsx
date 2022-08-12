const XList = ({exp}) =>{
    console.log(exp)
    return (<ul>
        {exp.map( el=><li>{el}</li>)}
    </ul>)
}
export default XList