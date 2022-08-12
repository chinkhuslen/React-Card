import UName from './UName'
import Avatar from './avatar'
const CardHeader = ({name, job, url})=>{
    return (
        <div className="cardHeader">
            <UName name = {name} job = {job}/>
            <Avatar url = {url}/>
        </div>
    )
}
export default CardHeader