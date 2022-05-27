import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-500 text-white rounded">
            <div className='footer mx-20 my-2 p-10 '>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Portfolio</a>
                    <a className="link link-hover">Dashboard</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center pb-10'>
                <p className='text-2xl'>Copyright © 2022 - All right reserved by Computer Parts Menufucture.</p>
            </div>
        </footer>
    );
};

export default Footer;