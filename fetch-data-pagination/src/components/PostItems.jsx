import React from 'react'

const PostItem=({posts})=>{
  return(
    <div>
      {posts.map((ele)=>(
        <h3  key={ele.id}>
          <span style={{color:"red"}}>{ele.id}. </span>
          {ele.title}
        </h3>
         
      ))}
     
    </div>
  )
}

export default PostItem