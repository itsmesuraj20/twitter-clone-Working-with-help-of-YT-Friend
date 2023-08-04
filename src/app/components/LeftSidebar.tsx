import React from 'react'

import Link from 'next/link'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark,BsThreeDots,BsTwitter} from 'react-icons/bs'
import { HiOutlineHashtag, HiOutlineMail } from 'react-icons/hi';



const NAVIGATION_ITEMS=[ 
  {
    title:'Twitter',
    icon: BsTwitter
  },
{
  title:'Home',
  icon:BiHomeCircle

},
{
  title:'Explorer',
  icon: HiOutlineHashtag
},
{
  title:'Notification',
  icon:BsBell
},
{ title:'Messages',
  icon: HiOutlineMail
},
{ title:'Bookmarks',
  icon:BsBookmark
},
{
  title:'Profile',
  icon: BiUser
}

]
const LeftSidebar = () => {
  return (
    <div>
         <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-2 ">
  <div className="flex flex-col items-stretch space-y-4 mt-4">
    {NAVIGATION_ITEMS.map((item) => (
      <Link
        className="hover:bg-white/30 text-3xl transition duration-200 flex items-center justify-start w-fit justify-center space-x-6 rounded-3xl py-2 px-6"
        href={`/${item.title.toLowerCase()}`}
        key={item.title}
      >
        <div>
          <item.icon />
        </div>
        {item.title !=="Twitter" && <div>{item.title}</div>}
      </Link>
    ))}
    <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200" >Tweet</button>
  </div>
  {/* Move the "Suraj Singh" section here */}
  <div className="flex flex-col items-center mt-auto">
  <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4  text-center hover:bg-white/10 transition duration-200 w-full justify-between">
    <div className="flex items-center space-x-2">
      <div className="rounded-full bg-slate-400 w-8 h-8"></div>
      <div className="text-left text-sm">
        <div className="font-semibold">Suraj Singh</div>
        <div>@itsmesuraj20</div>
      </div>
    </div>
    <div className="ml-auto"> {/* Add ml-auto class here */}
      <BsThreeDots />
    </div>
  </button>
</div>

</section>
    </div>
  )
}

export default LeftSidebar