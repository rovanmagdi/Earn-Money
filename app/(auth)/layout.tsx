import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen">
            <Link href="/" className="col-9 absolute mt-3 mx-[80px]">
                <Image
                    src="/assets/img/logo.svg"
                    height={40}
                    width={130}
                    alt="logo"
                />
            </Link>
            <img src="assets/img/green.png" className="absolute -z-10 h-screen" />
            <img src="assets/img/yellow.png" className="absolute right-0 -z-10 h-screen" />
            <img src="assets/img/benefit.svg" className="absolute top-[250px] right-[115px] " />
            {children}
        </div>
    );
};

export default AuthLayout;
