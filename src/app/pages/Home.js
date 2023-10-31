import React, { useEffect } from 'react'
import Header from '../Component/Header'
import Posts from '../Component/Posts'
import { post_Content } from '../Data'
import Footer from '../Component/Footer'
import { useGlobalContext } from '../UserContext/UserContext'
import { useGetHomeContentQuery, useGetPostsQuery } from '../store/storeApi'

const Home = () => {
  const {post,setPost, content, setHomeContent} = useGlobalContext();
  const { refetch } = useGetHomeContentQuery();
  const { refetch: refetchPosts } = useGetPostsQuery();
  useEffect(() => {
    // Fetch and set the latest content when the component mounts
    const fetchData = async () => {
      const newData = await refetch();
      setHomeContent(newData);
    };

    fetchData();
  }, [refetch, setHomeContent]);
  useEffect(() => {
    // Fetch and set the latest content when the component mounts
    const fetchData = async () => {
      const newData = await refetch();
      setHomeContent(newData);
    };

    fetchData();
  }, [refetch, setHomeContent]);
  useEffect(() => {
    // Fetch and set the latest content when the component mounts
    const fetchData = async () => {
      const newData = await refetchPosts();
      setPost([...post, newData]);
    };

    fetchData();
  }, [refetchPosts, setPost]);

  return (
    <>
      <div className='main_container'>
        <Header />
        {content?.map((item, index) => (
        <main className='main_content' key={index}>
          <img src={item?.mainImage} className='main_bg' alt="" />
          <div className="title">
            <h1>{item?.mainText}</h1>
          </div>
          <div className="posts">
            {post?.map((posts, index) => {
              return <div className="post_contents" key={index}>
                <Posts date={posts?.postDate} title={posts?.postTitle} topic={posts?.postTopic} info={posts?.postDescription} info2={posts?.postInfo} line1={posts?.postLine1} line2={posts?.postLine2} line3={posts?.postLine3} line4={posts?.postLine4} img={posts?.postImage} feedBack={posts?.postSummary && posts?.postSummary} event={posts?.postFooterText} downLoad_btn={posts?.download_btn} consultation={posts?.postFooter} readMore={posts?.readme_btn} />
              </div>
            })}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </main>
        ))}
      </div>
    </>
  )
}
// 
export default Home