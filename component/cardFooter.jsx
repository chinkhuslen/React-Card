import Icon from './Icon'
import VMButton from './VMButtom'
const CardFooter = ({social, id})=>{
    return (
        <div className="cardFooter">
            <div>
                <VMButton id={id}/>
            </div>
            <div><Icon social = {social}/></div>
        </div>
    )
}
export default CardFooter