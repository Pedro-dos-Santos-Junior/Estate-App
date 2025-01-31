import React from "react"
import Back from "../common/Back"
import RecentCard from "../Home/recent/RecentCard"
import "../Home/recent/recent.css";
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog