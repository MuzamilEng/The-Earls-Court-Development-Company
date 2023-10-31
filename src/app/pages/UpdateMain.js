import React, { useState } from 'react';
import { useUpdateHomeContentMutation } from '../store/storeApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../UserContext/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Component/Sidebar';

const UpdateMain = () => {
    const [updateHomeContent] = useUpdateHomeContentMutation();
    const { homeContent, setHomeContent, content } = useGlobalContext();
    const navigate = useNavigate();
    const id = content[0]?._id;
    const [selectedImageURL, setSelectedImageURL] = useState(homeContent?.mainImage || '');

    const { handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            mainImage: homeContent?.mainImage,
            mainText: homeContent?.mainText,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHomeContent({ ...homeContent, [name]: value });
        setValue(name, value);
    };

    const handleImageChange = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        if (file) {
            setHomeContent({ ...homeContent, [e.target.name]: file });
            const imageURL = URL.createObjectURL(file);
            setSelectedImageURL(imageURL);
        }
    };

    const onSubmit = async (data) => {
        data.id = id;
        const formData = new FormData();

        // Append text data to formData
        for (const key in data) {
            if (data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        }

        // Append images to formData
        formData.append('mainImage', homeContent?.mainImage);

        try {
            const result = await updateHomeContent({ id, data: formData });
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
    };
    return (
        <form className='flex flex-col justify-center overflow-hidden items-center' onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center bg-[#1D294E] p-3 w-full text-white font text-2xl font-bold">Update Post</h1>
            <ToastContainer />
            <div className="absolute top-[3.5rem] left-0 z-50 h-full">
                <Sidebar />
            </div>
            <div className=" flex justify-center items-start flex-col mt-[2rem]">
                <label htmlFor="mainImage" className='text-xl font font-semibold'>Main Image</label>
                <img
                    src={selectedImageURL || content?.[0]?.mainImage}
                    className="w-[40rem] text-black font rounded-md focus:outline-none border-blue-900 border-[2px]"
                    alt="Current Header Image"
                />
                <input
                    className='mt-4'
                    type="file"
                    name="mainImage"
                    id="mainImage"
                    onChange={handleImageChange}
                />
                <label htmlFor="mainText" className='text-xl font font-semibold mt-[2rem]'>Main Title</label>
                <input
                    className='w-[40rem] p-2 text-black font rounded-md focus:outline-none border-blue-900 border-[2px]'
                    type="text"
                    defaultValue={content?.[0]?.mainText}
                    name="mainText"
                    id="mainText"
                    onChange={handleInputChange}
                />

            </div>
            <button type="submit" className='p-1 rounded-md font-semibold w-[12rem] bg-blue-900 text-white hover:bg-blue-800 text-xl mb-4 mt-4 border-[2px] border-blue-950'>Submit</button>
        </form>
    );
}

export default UpdateMain;
