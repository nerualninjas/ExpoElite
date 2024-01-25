"use client"


import { useState } from "react";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Image from "next/image";
import Link from "next/link";


const Register = () => {

    const {googleSignIn,createUser}=UserAuth()
   
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);


        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


        // reset error and success
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/.test(password)) {
            setRegisterError,
                Swal.fire("Oops!", "Your password should have length at least 6 character one upper case and one special characters!", "error");
            return;
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess,
                    Swal.fire("Good job!", "User Created Successfully!", "success");
                    updateUser(name,photo)
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }

    return (
        <div className=" bg-gradient-to-b from-pink-100 to-base-100 min-h-screen ">
            <div className="flex flex-col md:flex-row items-center justify-center w-3/5 mx-auto  border-black py-10 rounded-lg ">
                <div className="md:w-full  lg:w-1/2 bg-[#FF385C] h-[80vh] flex justify-center items-center mx-auto rounded-l-lg">
                    <Image width={300} height={300} className="w-full py-3" src={"https://i.postimg.cc/TwpYwc0g/login1-removebg-preview.png"} alt="picture" />
                </div>
                <div className="w-full lg:w-1/2 my-0 md:mt-1 bg-base-100 rounded-r-lg py-3 h-[90vh] mx-auto ">
                    <h2 className="text-3xl my-8 font-bold text-center  text-black">Sign Up</h2>
                    <form onSubmit={handleRegister} className="w-9/12 md:w-4/5 lg:w-4/5   mx-auto h-full text-center  place-items-center">
                        <div className="form-control">
                            <input type="text" placeholder="Name" name="name" className="input py-6 input-bordered rounded-full mb-5" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Photo URL" name="photo" className="input py-6  input-bordered rounded-full mb-5" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" name="email" className="input input-bordered py-6 mb-5 rounded-full" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name="password" className="input input-bordered py-6 mb-5 rounded-full" required />
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn bg-[#FF385C] text-white py-6 mb-2 rounded-full border-none">Sign Up</button>
                        </div>
                        <div className="form-control">
                            <h2 className="text-md font-semibold"> Or Log in with</h2>
                            <button className="btn bg-[#FF385C] text-white py-6 mt-2 rounded-full border-none">
                                {/* <FcGoogle></FcGoogle> */}
                                Google
                            </button>
                        </div>
                        <p className="text-center mt-4 pb-5 text-black font-semibold text-sm">Already have an Account?
                            <Link href='/login'
                                className="text-[#FF385C] ml-2 font-semibold text-base mb-10" >Login</Link></p>
                    </form>
                    {/* {
            loginError && <p className="text-red-700">{loginError}</p>
        }
        {
            success && <p className="text-green-600">{success}</p>
        } */}

                </div>
            </div>
        </div>
    );
};

export default Register;