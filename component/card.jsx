import XList from './expList'
import CardFooter from './cardFooter'
import CardHeader from './cardHeader'
import { useButtonContext } from "./contextButton"
const Card = ({data, id}) =>{
    const {isClicked,setIsClicked} = useButtonContext();
    return (
    <div className="card" style={{height: isClicked[id].isButtonClicked ? 450+'px' : 350 + 'px' }}>
        <CardHeader name ={data.name} job = {data.profession} url={data.profile}/>
        <div className="match">76% Match</div>
        <div className='Xlist' style={{height: isClicked[id].isButtonClicked ? 250+'px' : 170 + 'px' }}>
            <XList exp = {data.experience}/>
        </div>
        <CardFooter social = {data.socialLinks} id = {id}/>
    </div>)
}
export default Card