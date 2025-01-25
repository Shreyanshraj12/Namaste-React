const Shimmer = ()=>{
  return(
    <div className="resturant-list">
      {Array(8).fill("").map((e)=>(
        <div className="shimmer-card"></div>
      ))}
      
    </div>
  )
}

export default Shimmer;