import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-4xl mx-auto'>
      <div className='bg-[#f0f9ff] h-[220px] flex items-center mb-4 rounded-lg '> <span className='text-5xl mx-auto font-bold'>About Us</span></div>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Bech Do By Gopi Yadav</h1> 
      <h2 className='text-2xl mb-6'>We are currently only in Rajpura and Jhansla</h2>
      <p className='mb-4 text-slate-700'>Welcome to our online marketplace, where sellers can showcase their products and buyers can easily find what they're looking for. Think of it as a virtual bazaar where people can list their goods and others can browse and make purchases. Whether you're a seasoned seller or just starting out, this is the place for you. From handmade crafts to trendy gadgets, our platform is buzzing with unique finds waiting to be discovered.</p>
      <p className='mb-4 text-slate-700'>Explore our marketplace and uncover a treasure trove of items from passionate creators and businesses. It's as easy as browsing through your favorite store, but with a wider selection and the convenience of online shopping. Connect with sellers, ask questions, and make purchases with just a few clicks. We're all about making buying and selling fun and hassle-free.</p>
      <p className='mb-4 text-slate-700'>Join our community of buyers and sellers and be a part of something special. Whether you're on the hunt for something specific or just browsing for inspiration, there's always something new to discover. Welcome to our online marketplace – where every purchase tells a story and every seller brings their passion to the table. Happy shopping!</p>
      <div className=' flex gap-4'>
        <a href="https://twitter.com/Gopi138686" ><img src="https://www.99acres.com/universalhp/img/twitter_large.shared.png" alt="" /></a>
        <a href="https://www.instagram.com/gopiyadav.17/" ><img src="https://www.99acres.com/universalhp/img/fb.shared.png" alt="" /></a>
        <a href="https://www.youtube.com/channel/UCxT1jRxi2zRWr5qh47by3YA" ><img src="https://www.99acres.com/universalhp/img/footerYoutube.shared.png" alt="" /></a>
      </div>
    </div>
  )
}
