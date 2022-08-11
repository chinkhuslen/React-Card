
import Avatar from './avatar'
const Card = () =>{
    return (
    <div className="card">
        <div className="cardHeader">
            <div>
                <div>Name</div>
                <div>Profession</div>
            </div>
            <Avatar url = {'https://picsum.photos/60'}/>
        </div>
        <div className="match">76% Match</div>
        <div>
            <ul>
                <li>Computer Sceince Degree</li>
                <li>Computer Sceince Degree</li>
                <li>Computer Sceince Degree</li>
                <li>Computer Sceince Degree</li>
            </ul>
        </div>
        <div className="cardFooter">
            <div>
                <button className="VMButton">View More</button>
            </div>
            <div>icon icon icon icon</div>
        </div>
    </div>)
}
export default Card