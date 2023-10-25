import React from 'react'
import Header from '../Component/Header'
import Posts from '../Component/Posts'
import { post_Content } from '../Data'
import Footer from '../Component/Footer'

const Home = () => {

  return (
    <>
      <div className='main_container'>
        <Header />
        <main className='main_content'>
          <img src="images/main_bg.png" className='main_bg' alt="" />
          <div className="title">
            <h1>Consultation <br /> to date</h1>
          </div>
          <div className="posts">
            {post_Content?.map((item, index) => {
              return <div className="post_contents" key={index}>
                <Posts date={item?.date} title={item?.title} topic={item?.topic} info={item?.info} info2={item?.info2} line1={item?.line1} line2={item?.line2} line3={item?.line3} line4={item?.line4} img={item?.img} feedBack={item?.feedBack && item?.feedBack} event={item?.events} downLoad_btn={item?.download_btn} consultation={item?.consultation} readMore={item?.readMore} />
              </div>
            })}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
// 
export default Home