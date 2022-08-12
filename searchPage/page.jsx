import Card from '../component/card'
const Page = ({data}) =>{
    return(<div className='wrapper'>
        {data.map(el =><Card data = {el}/>)}
    </div>)
}
export default Page