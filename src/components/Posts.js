const Posts =(props)=>{
  if(props.loading){
    return <h2>Loading....</h2>
  }
  return(
    <div style={{margin:10,padding:10,border:"1px solid black"}}>
      {props.posts.map((post)=>{
        return(
        <li style={{padding:15,borderBottom:"1px solid black"}}>
          {post.title}
        </li>
      )})}
    </div>
  )
}
export default Posts;