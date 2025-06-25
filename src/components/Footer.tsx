"use client";
import { Linkedin, Github, Mail, Copyright  } from 'lucide-react';
import React from "react";

export default function Footer() {

    return (
        <div className="w-full flex border-t border-foreground pt-7 pb-12 justify-center gap-20 items-center">
            <div className="footer-left flex gap-3">
                <Linkedin className='cursor-pointer'/>
                <Github className='cursor-pointer' />
                <Mail className='cursor-pointer' />
            </div>
            <div className="footer-middle flex gap-2 ">
                <Copyright />
                Dhanjit Nath
            </div>
            <div className="footer-right" >
                Built with {" "}
                <a href="https://nextjs.org" target='_blank' className='hover:text-accent-foreground'>NextJs</a> 
            </div>
        </div>
    )

}