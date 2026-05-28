import { useState } from "react";

const Card= ({title})=>{
  const [hasLiked,setHasLiked]=useState(false);
  const [count,setCount]=useState(0);
  return(
    <div className="card" onClick={()=>setCount(count+1 )}>
  <h2>{title} {count}</h2>
  <button onClick={()=>setHasLiked(!hasLiked)}>
    {hasLiked ? "Liked ❤️" : "Like 🤍"}
    </button>
    </div> 
  )
}


const App=()=> {


  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true}/>

    </div>
  )
}
export default App
