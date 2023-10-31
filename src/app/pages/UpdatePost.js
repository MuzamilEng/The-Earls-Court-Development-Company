import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../UserContext/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUpdateHomePostMutation } from '../store/storeApi';
import Sidebar from '../Component/Sidebar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// moment().format('MMMM Do YYYY, h:mm:ss a');
const UpdatePost = () => {
    const postId = useParams();
    const [updateHomePost] = useUpdateHomePostMutation();
    const { postContent, setPostContent } = useGlobalContext();
    const navigate = useNavigate();
    const [selectedImageURL, setSelectedImageURL] = useState(postContent?.postImage || '');

    const getPostById = async () => {
        const post = await fetch(`http://localhost:5000/api/v1/posts/${postId?.id}`);
        const data = await post.json();
        setPostContent(data);
    }
    useEffect(() => {
        getPostById();
    }, [postId])
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            postDate: postContent?.postDate   || "",
            postTitle: postContent?.postTitle || "",
            postTopic: postContent?.postTopic || "",
            postDescription: postContent?.postDescription || "",
            postInfo: postContent?.postInfo   || "",
            postLine1: postContent?.postLine1 || "",
            postLine2: postContent?.postLine2 || "",
            postLine3: postContent?.postLine3 || "",
            postLine4: postContent?.postLine4 || "",
            postFooterText: postContent?.postFooterText   || "",
            postSummary: postContent?.postSummary   || "",
            download_btn: postContent?.download_btn || "",
            postFooter: postContent?.postFooter     || "",
            readme_btn: postContent?.readme_btn     || "",
            postImage: postContent?.postImage       || "",

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
        if (postContent) {
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
                const result = await updateHomePost({ id: postId?.id, data: formData });
                // Show success toast
                toast.success("Content updated successfully", {
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
                toast.error("An error occurred while updating content", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            }
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center bg-[#1D294E] p-3 w-full text-white font text-2xl font-bold">Update Post</h1>
            <ToastContainer />
            <div className="absolute top-[3.5rem] left-0 z-50 h-full">
                <Sidebar />
            </div>
            <main>
                <div className='absolute left-[25rem]'>
                    <div className=' mt-[1rem]'>
                        <p className='text-2xl ml-[-5rem] font font-semibold '>You can edit your content here!</p>
                        <section className="mt-[2rem] flex flex-col items-start">
                            <label className='text-xl font font-semibold' htmlFor="postDate">Date: </label>
                            {/* <DatePicker
                                name="postDate"
                                dateFormat="MMMM yyyy"
                                maxDate={new Date()}
                                value={postContent?.postDate ? postContent.postDate : ""}
                                onChange={(value) => setPostContent({ ...postContent, postDate: value })}
                                className="w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]"
                            /> */}
                            <input type="text" name="postDate" id="postDate" value={postContent?.postDate} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            <label className='text-xl font font-semibold' htmlFor="postTitle">Title: </label>
                            <input type="text" name="postTitle" id="postTitle" value={postContent?.postTitle} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            <label className='text-xl font font-semibold' htmlFor="postTopic">Topic: </label>
                            <input type="text" name="postTopic" id="postTopic" value={postContent?.postTopic} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            <label className='text-xl font-semibold' htmlFor="postDescription">Description: </label>
                            <textarea name="postDescription" rows={6} id="postDescription" value={postContent?.postDescription} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} ></textarea> <br />
                            {postContent?.postInfo && <>
                                <label className='text-xl font-semibold' htmlFor="postInfo">Info2</label>
                                <textarea name="postInfo" id="postInfo" value={postContent?.postInfo} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} ></textarea>  <br />
                            </>}
                            {postContent?.postLine1 && <>
                                <label className='text-xl font-semibold' htmlFor="postLine1">Line1</label>
                                <input type="text" name="postLine1" id="postLine1" value={postContent?.postLine1} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.postLine2 && <>
                                <label className='text-xl font-semibold' htmlFor="postLine2">Line2</label>
                                <input type="text" name="postLine2" id="postLine2" value={postContent?.postLine2} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.postLine3 && <>
                                <label className='text-xl font-semibold' htmlFor="postLine3">Line3</label>
                                <input type="text" name="postLine3" id="postLine3" value={postContent?.postLine3} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.postLine4 && <>
                                <label className='text-xl font-semibold' htmlFor="postLine4">Line4</label>
                                <input type="text" name="postLine4" id="postLine4" value={postContent?.postLine4} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            <label className='text-xl font-semibold' htmlFor="img">Image: </label>
                            <img src={selectedImageURL || postContent?.postImage} className='w-[40rem] h-[20rem] rounded-md focus:outline-none border-blue-900 border-[2px]  ' /> <br />
                            <input type="file" name="postImage" id="postImage" className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleImageChange} /> <br />
                            {postContent?.postFooterText && <>
                                <label className='text-xl font-semibold' htmlFor="postFooterText">FeedBack</label>
                                <input type="text" name="postFooterText" id="postFooterText" value={postContent?.postFooterText} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.download_btn && <>
                                <label className='text-xl font-semibold' htmlFor="download_btn">Download Button Text</label>
                                <input type="text" name="download_btn" id="downLoad_btn" value={postContent?.download_btn} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.postSummary && <>
                                <label className='text-xl font-semibold' htmlFor="postSummary">Footer Text</label>
                                <input type="text" name="postSummary" id="postSummary" value={postContent?.postSummary} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.readme_btn && <>
                                <label className='text-xl font-semibold' htmlFor="readme_btn">ReadMore</label>
                                <input type="text" name="readme_btn" id="readme_btn" value={postContent?.readme_btn} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            {postContent?.postFooter && <>
                                <label className='text-xl font-semibold' htmlFor="postFooter">Post Footer</label>
                                <input type="text" name="postFooter" id="postFooter" value={postContent?.postFooter} className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]' onChange={handleInputChange} /> <br />
                            </>}
                            <div className="flex justify-center items-center">
                            <button type="submit" className='p-1 rounded-md font-semibold w-[12rem] bg-blue-900 text-white hover:bg-blue-800 text-xl mb-4 mt-4 border-[2px] border-blue-950'>Submit</button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </form>
    )
}

export default UpdatePost

{/* <section className="mt-[2rem] flex flex-col items-start">
{editPost?.map((item, index) => {
    return <div className="flex flex-col items-start" key={index}>
        <label htmlFor={item?.name} className='text-xl font font-semibold'>{item?.label}</label>
        {item?.type === 'text' ? (
            <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                    <input
                        {...field}
                        onChange={handleInputChange}
                        className={`w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]`}
                        type={item?.type}
                        placeholder={item?.placeholder}
                    />
                )}
            />
        ) : item?.type === 'textarea' ? (
            <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                    <textarea
                        rows={6}
                        {...field}
                        // name={item?.name}
                        onChange={handleInputChange}
                        className={`w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]`}
                        placeholder={item?.placeholder}
                    ></textarea>
                )}
            />
        ) : item?.type === 'date' ? (
            <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                    <DatePicker
                        {...field}
                        selected={field.value ? moment(field.value, 'YYYY-MM-DD').toDate() : null}
                        dateFormat="yyyy-MM-dd"
                        maxDate={new Date()}
                        onChange={(date) => field.onChange(moment(date).format('YYYY-MM-DD'))}
                        className={`w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]`}
                    />
                )}
            />
        ) : null}
        {errors[item?.name] && <p className='text-red-500'>{errors[item?.name]?.message}</p>}
    </div>
})}
<div className="flex justify-center items-center">
    <button type="submit" className='p-1 rounded-md font-semibold w-[12rem] bg-blue-900 text-white hover:bg-blue-800 text-xl mb-4 mt-4 border-[2px] border-blue-950'>Submit</button>
</div>
</section> */}