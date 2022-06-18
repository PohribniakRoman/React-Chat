export default function SearchList({users}) {
    return <ul className="searchlist">
        {users.map((user,index)=>{
            return <li className="searchlist__item" key={index}>{user}</li> 
        })}
    </ul>
}