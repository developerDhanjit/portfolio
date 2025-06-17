"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Button variant={'destructive'} onClick={(e)=>{ alert("Hello I am a button")}}>Click me </Button>
    </div>
  );
}
