const XList = ({exp}) =>{
    return (<ul>
        {exp.map( el=><li>{el}</li>)}
    </ul>)
}
export default XList