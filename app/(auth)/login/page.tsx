import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <>        <div className="flex flex-col justify-center items-center translate-y-[30%]">
            <div className='bg-white rounded-[32px] shadow-md p-[54px] w-[484px] flex flex-col justify-center items-center'>
                <h1 className='font-bold text-[32px]'>Login</h1>
                <p className='text-[14px]'>
                    Hey, Enter your details to get sign in to your account
                </p>
                <div className='flex flex-col gap-[16px] mt-[29px]'>
                    <input type="text" placeholder="Email" className="bg-white px-[10px] py-[12px] rounded-[8px] w-[379px] border-[1px] border-gray-300 focus:border-green-500 focus:outline-none" />
                    <input type="password" placeholder="Password" className="bg-white px-[10px] py-[12px] rounded-[8px] w-[379px] border-[1px] border-gray-300 focus:border-green-500 focus:outline-none" />
                    <p className='text-green-500 text-[14px] font-bold text-end'>Forgot Password?</p>
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-3 mt-[32px]'>
                    <button className='bg-green-500 text-white px-[12px] py-[12px] rounded-md w-full'>Login</button>
                    <button className='flex items-center justify-center gap-3 text-green-500 px-[12px] py-[12px] rounded-md border-[1px] border-green-500 w-full text-[14px]'>
                        <Image src="/assets/img/google.png" alt="" height={25} width={25} />
                        <p>

                            Login with google
                        </p>
                    </button>
                </div>
                <div className='mt-[32px]'>
                    <p className='text-[#676765]'>

                        Don’t have account?  <span className='font-bold text-green-500'>Register Now</span>
                    </p>
                </div>

            </div>
        </div>
            <Image src="/assets/img/coins-.svg" className="absolute z-10  left-[450px] bottom-[10px]" alt="" height={120} width={120} />
        </>
    )
}

export default Login