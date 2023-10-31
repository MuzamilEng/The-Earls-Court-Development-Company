import React, { useState } from 'react'
import { useGlobalContext } from '../UserContext/UserContext'
import { Icon } from '@iconify/react';
import Posts from '../Component/Posts';
import { Link, useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from '../store/storeApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Header';

const UpdateForm = () => {
  const { content, post } = useGlobalContext();
  const mainId = content?.[0]?._id;
  const navigate = useNavigate();
  const [deletePost] = useDeletePostMutation();
  const [postId, setPostId] = useState(null);
  console.log(postId, 'postId');

  const handleSubmit = async (id) => {
    try {
      // console.log(id, 'id in func');
      // setPostId(postId);
      const delPost = await deletePost(id);
      toast.success("Post deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);
      console.log(delPost, "from onsubmit");
    } catch (error) {
      // Show error toast
      toast.error("An error occurred while deleting post", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  }
  // console.log(mainId);

  return (
    <>
      <div className="relative">        
        <Header />
        <ToastContainer />
        <div className="top-[5.1rem] absolute z-50 left-0 h-full">
          <Sidebar />
        </div>
        {content?.map((item, index) => (
          <main className='main_content' key={index}>
            <Link to={`/edit-main/${mainId}`}>
              <div className="absolute flex text-2xl p-1 items-center rounded-md border-[2px] bg-blue-900 cursor-pointer text-blue-400 border-blue-500 hover:bg-blue-700 hover:text-white top-[2rem] right-5"><Icon icon="bx:edit" color="" className='text-2xl hover:text-white' /></div>
            </Link>
            <img src={item?.mainImage} className='main_bg' alt="" />
            <div className="title">
              <h1>{item?.mainText}</h1>
            </div>
            <div className="posts">
              {post?.map((posts) => {
                return <div className="post_contents relative" key={posts?._id}>
                  <div className="flex absolute bottom-3 right-3 items-center">
                    <Link to={`/edit-post/${posts?._id}`}>
                      <div className="flex items-center text-2xl p-1 rounded-md m-2 border-[2px] bg-blue-900 cursor-pointer text-blue-400 border-blue-500 hover:bg-blue-700 hover:text-white"><Icon icon="bx:edit" color="" className='text-2xl hover:text-white' /></div>
                    </Link>
                    <div className="flex items-center text-2xl p-1 rounded-md border-[2px] bg-red-700 cursor-pointer text-white border-red-700 hover:bg-red-600 hover:text-white">
                      <Icon
                        icon="material-symbols:delete-outline"
                        color=""
                        onClick={() => handleSubmit(posts._id)}
                        className="text-2xl hover:text-white"
                      /></div>                  </div>
                  <Posts date={posts?.postDate} title={posts?.postTitle} topic={posts?.postTopic} info={posts?.postDescription} info2={posts?.postInfo} line1={posts?.postLine1} line2={posts?.postLine2} line3={posts?.postLine3} line4={posts?.postLine4} img={posts?.postImage} feedBack={posts?.postSummary && posts?.postSummary} event={posts?.postFooterText} downLoad_btn={posts?.download_btn} consultation={posts?.postFooter} readMore={posts?.readme_btn} />
                </div>
              })}
            </div>
            <Link to='/add-post'>
            <div className="flex text-2xl mb-[4rem] p-1 items-center rounded-md border-[2px] bg-green-900 cursor-pointer text-white border-green-500 hover:bg-green-700 hover:text-white"><Icon icon="basil:add-outline" color="" className='text-2xl hover:text-white' /><span className='text-xl font-semibold'>Add Post</span></div>
            </Link>
          </main>
        ))}
      </div>
    </>
  )
}

export default UpdateForm