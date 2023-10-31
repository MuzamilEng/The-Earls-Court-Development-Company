import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetHomeContentQuery, useGetPostsQuery } from '../store/storeApi';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data, error, isLoading } = useGetHomeContentQuery();
  const { data: posts = [] } = useGetPostsQuery();
  const [content, setContent] = useState([]);
  const [post, setPost] = useState([]);
  const [homeContent, setHomeContent] = useState({
    mainImage: '',
    mainText: '',
  })
  const [postContent, setPostContent] = useState({
    postDate: "", postTitle: "", postTopic: "", postImage: "", postDescription: "", postInfo: "", postLine1: "", postLine2: "", postLine3: "", postLine4: "", postFooterText: "", postSummary: "", download_btn: "", postFooter: "", readme_btn: ""   })

  useEffect(() => {
    if (data) {
      setContent(data);
      setPost(posts);
    }
  }, [data, post]); 

  // console.log(content, 'content');
  // console.log(post, 'post');

  return (
    <UserContext.Provider value={{
      content,
      setContent,
      post,
      setPost,
      homeContent,
      setHomeContent,
      postContent,
      setPostContent
    }}>
      {children}
    </UserContext.Provider>
  );
};
