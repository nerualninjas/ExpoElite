'use client'
import Lottie from "lottie-react";
import LoginAni from "./Login.json"
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Link from "next/link";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';



const Login2 = () => {
    const router = useRouter();
    const {signIn, googleSignIn}=UserAuth()


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        // add validation and log in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                    Swal.fire("Good job!", "User Logged in Successfully!", "success");

                // navigate after login 
                router.push('/dashboard');
            })
            .catch(error => {
                console.error(error);
                    Swal.fire("Oops!", "Your email or password is invalid!", "error");
            })
    }



    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                Swal.fire("Good job!", "User Logged in Successfully!", "success");

                // navigate after login 
                router.push('/dashboard');
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className="min-h-screen ">
             <h1 className="text-3xl md:text-5xl font-bold text-center text-rose-600 py-10 ">Login</h1>
             <div className='flex flex-col md:flex-row items-center justify-center gap-4  mb-20 '>
            <div className="w-1/3">
                <Lottie animationData={LoginAni} loop={true} />
            </div>
            <div className="w-2/3 max-w-md p-8 space-y-3 rounded-xl ">
                <form onSubmit={handleLogin} novalidate="" action="" className="space-y-3">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block text-rose-700">User Email</label>
                        <input type="email" name="email" id="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md bg-rose-50" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-rose-700">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-rose-50" />
                        <div className="flex justify-end text-xs text-rose-700">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded bg-rose-600 text-white">Log in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16"></div>
                    <p className="px-3 text-sm text-rose-700">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm text-rose-500">
                        <FaGoogle className="text-2xl"></FaGoogle>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm text-rose-500">
                        <FaTwitter className="text-2xl"></FaTwitter>
                    </button>
                    <button aria-label="Log in with Facebook" className="p-3 rounded-sm text-rose-500">
                        <FaFacebook className="text-2xl"></FaFacebook>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-rose-700">Don&apos;t have an account?
                    <Link rel="noopener noreferrer" href="/register" className="underline ">Register</Link>
                </p>
            </div>
            
        </div>
        </div>
        
    );
};

export default Login2;