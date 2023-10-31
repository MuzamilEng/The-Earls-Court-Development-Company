import React, { useState } from 'react'
import { useLoginAdminMutation } from '../store/storeApi'
import { toast, ToastContainer } from 'react-toastify';
import { Icon } from '@iconify/react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [loginAdmin] = useLoginAdminMutation();
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState({
        username: 'Admin', password: ''
    })
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const resetUserInput = () => {
        setUser({
            username: '',
            password: ''
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const login = await loginAdmin(user);

            console.log(login, "login");
            if (login?.data?.message === 'Login successful') {
                toast.success("LoggedIn Successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                })
                setTimeout(() => {
                    navigate('/update');
                }, 3000);
                setUser({
                    username: '', password: ''
                })
                resetUserInput();
            }
            else{
                toast.error("Please check your credentails or try again", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
                resetUserInput();
            }
        } catch (error) {
            console.log(error);
            // Show error toast
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='admin_container'>
                <main>
                    <ToastContainer />
                    <section>
                        <h1>Welcome Back!</h1>
                        <img src="images/muzi.png" alt="" className='animated' />
                        <p>Please enter your credentials to access the admin dashboard</p>
                    </section>
                    <article>
                        <div className='relative'>
                            <h1>Please Enter Password To Login</h1>
                            <label htmlFor="Password">Password</label> <br />
                            <p>
                            {toggle ? <Icon icon="solar:eye-bold" className='icon' onClick={() => setToggle(!toggle)} />: <Icon  className='icon' icon="el:eye-close" onClick={() => setToggle(!toggle)} />}
                            </p>
                            <input type={toggle ? 'text' : 'password'} value={user.password} name='password' placeholder='enter your password' onChange={handleInputChange} />
                            <button type='submit'>Login</button>
                        </div>
                    </article>
                </main>
            </div>
        </form>
    )
}

export default Admin