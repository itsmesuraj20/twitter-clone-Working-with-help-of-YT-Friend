import Link from 'next/link'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark,BsTwitter} from 'react-icons/bs'
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
{ title:'Home',
  icon:BsBookmark
},
{
  title:'Profile',
  icon: BiUser
}

]

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Header */}
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className="hover:bg-white/30 text-3xl transition duration-200 flex items-center justify-start w-fit justify-center space-x-6 rounded-3xl py-2 px-4"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
                {item.title !=="Twiiter" && <div>{item.title}</div>}
            </Link>
          ))}
        </section>
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  );
};


export default page