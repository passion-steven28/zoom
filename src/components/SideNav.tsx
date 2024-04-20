import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { Book, Home } from 'lucide-react';

type Props = {}
const NavLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <Home />
    },
    {
        title: 'About',
        path: '/about',
        icon: <Book />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <Book />
    }
]

export default function SideNav({ }: Props) {
    return (
        <div className="max-h-screen h-screen bg-gray-600 text-white flex flex-col justify-between items-center p-4">
            <div>
                {NavLinks.map((link) => {
                    return (
                        <div
                            key={link.title}
                            className="flex flex-row items-center justify-start gap-4"
                        >
                            <Link href={link.path} className="text-xl flex">
                                {""}
                                {link.icon && <span className="ml-2 text-4xl">
                                    {link.icon}
                                </span>}
                                {link.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div>
                <UserButton />
            </div>
        </div>
    );
}
