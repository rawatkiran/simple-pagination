import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App=()=>{
  const [posts,setPosts] = useState([]);
  const [loading,setloading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage ;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  useEffect(()=>{
    const fetchPosts= async()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res,"RES");
      setPosts(res.data);
      setloading(false)
    }
    fetchPosts();
  },[])
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  return(
    <div style={{width:800,height:"100%",margin:"auto"}}>
      <h2>My Blogs</h2>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App;