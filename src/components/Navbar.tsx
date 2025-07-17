import React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <div className="md:px-20 md:mt-4 hidden md:block" >
            <div className=" md:px-20  w-full text-xl flex justify-between items-center rounded-md border  md:min-h-18 bg-gradient-to-r from-secondary to-primary text-white shadow-md backdrop-blur-md
">
                <div className="text-5xl text-primary   ">
                    dn.
                </div>
                <NavigationMenu >
                    <NavigationMenuList className="flex justify-around bg-none text-2xl">
                        <NavigationMenuItem >
                            <NavigationMenuLink asChild   >
                                <Link href="/home" className="hover:underline" >Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild >
                                <Link href="/experiences" className="hover:underline">Experiences</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild >
                                <Link href="/products" className="hover:underline">Products</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild >
                                <Link href="/me" className="hover:underline">Contact me </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>)

}