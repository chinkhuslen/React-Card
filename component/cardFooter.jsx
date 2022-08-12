import Icon from './Icon'
import VMButton from './VMButtom'
const CardFooter = ({social})=>{
    return (
        <div className="cardFooter">
            <div>
                <VMButton/>
            </div>
            <div><Icon social = {social}/></div>
        </div>
    )
}
export default CardFooter