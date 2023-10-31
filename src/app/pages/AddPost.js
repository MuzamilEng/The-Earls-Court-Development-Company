import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../UserContext/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddHomePostMutation } from '../store/storeApi';

const AddPost = () => {
    const postId = useParams();
    const [addHomePost] = useAddHomePostMutation();
    const { postContent, setPostContent } = useGlobalContext();
    const navigate = useNavigate();
    const [selectedImageURL, setSelectedImageURL] = useState(postContent?.postImage || '');
    
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            postDate: postContent?.postDate || "",
            postTitle: postContent?.postTitle || "",
            postTopic: postContent?.postTopic || "",
            postDescription: postContent?.postDescription || "",
            postFooterText: postContent?.postFooterText || "",
            postSummary: postContent?.postSummary || "",
            download_btn: postContent?.download_btn || "",
            postFooter: postContent?.postFooter || "",
            readme_btn: postContent?.readme_btn || "",
            postImage: postContent?.postImage || "",

        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostContent({ ...postContent, [name]: value });
        setValue(name, value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPostContent({ ...postContent, [e.target.name]: file });
            const imageURL = URL.createObjectURL(file);
            setSelectedImageURL(imageURL);
        }
    };

    const onSubmit = async (data) => {
            const formData = new FormData();
            // Append text data to formData
            for (const key in data) {
                if (data[key] !== undefined) {
                    formData.append(key, data[key]);
                }
            }
    
            // Append images to formData
            formData.append('postImage', postContent?.postImage);
    
            try {
                const result = await addHomePost(formData);
                // Show success toast
                toast.success("Post Added successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
    
                setTimeout(() => {
                    navigate('/');
                }, 3000);
                console.log(result, "from onsubmit");
            } catch (error) {
                // Show error toast
                toast.error("An error occurred while adding post", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-center text-xl font-semibold">Update Post</h1>
                <div className='flex flex-col justify-center items-center mt-[2rem]'>
                    <label className='text-xl font-semibold' htmlFor="postDate">Date</label> <br />
                    <input type="text" name="postDate" id="postDate" value={postContent?.postDate} className='w-[50rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' onChange={handleInputChange} /> <br />
                    <label className='text-xl font-semibold' htmlFor="postTitle">Title</label> <br />
                    <input type="text" name="postTitle" id="postTitle" value={postContent?.postTitle} className='w-[50rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' onChange={handleInputChange} /> <br />
                    <label className='text-xl font-semibold' htmlFor="postTopic">Topic</label> <br />
                    <input type="text" name="postTopic" id="postTopic" value={postContent?.postTopic} className='w-[50rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' onChange={handleInputChange} /> <br />
                    <label className='text-xl font-semibold' htmlFor="postDescription">Info</label><br />
                    <textarea name="postDescription" id="postDescription" value={postContent?.postDescription} className='w-[50rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' onChange={handleInputChange} ></textarea> <br />
                    <label className='text-xl font-semibold' htmlFor="img">Img</label> <br />
                    <img src={selectedImageURL || postContent?.postImage} className='w-[50rem] h-[10rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' /> <br />
                    <input type="file" name="postImage" id="postImage" className='w-[50rem] p-2 rounded-md focus:outline-none border-blue-900 border-[2px]  ' onChange={handleImageChange} /> <br />
                    
                    <button type="submit" className='p-1 rounded-md font-semibold w-[12rem] mt-4 border-[2px] border-blue-500'>Submit</button>

                </div>
            </div>
        </form>
    )
}

export default AddPost