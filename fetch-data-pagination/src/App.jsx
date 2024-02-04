import React from 'react'
import {useState, useEffect} from 'react'
import PostItem from "./components/PostItems"

function App(){
  const [isLoading, setIsLoding] = useState(false)
  const [posts, setPosts] = useState([])
  const [errors, setErrors] = useState(null)
  const [page, setPage] = useState(1)

  async function fetchData(){
    setIsLoding(true)
    try {
      const data= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)

      const resp= await data.json()
      setPosts(resp)
      setIsLoding(false)
    } catch (error) {
      
      setErrors(errors.message)
      setIsLoding(false)
    }
  }

  useEffect(()=>{
    fetchData()
    
  },[page])

  useEffect(()=>{
    {posts}
  },[posts])

 
  
  return(
    <div style={{textAlign:"center"}}>
      {isLoading && <p>Loading....</p>}
      <PostItem posts={posts}/>
      <button 
        disabled={page == 1 ? true : false}
        onClick={()=>{setPage(page-1)
        fetchData()
        }}>Prev</button>
      <button 
        disabled={page==10 ? true : false}
        onClick={()=>{setPage(page+1)
        fetchData()
      }}>Next</button>
    </div>
  )
}

export default App