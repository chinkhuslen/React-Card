import Card from '../component/card'
const Page = ({ data }) => { 
    return (<div className='wrapper'>
        {data.map((el, i) => {
            return <Card data={el} id={i} />
        })}
    </div>)
}
export default Page 