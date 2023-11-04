import Link from "next/link";
import Image from "next/image";
import {footerLinks} from "@/constant";


const Footer = () => (
  <footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100">
     <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16">
   <div className="flex flex-col justify-start items-start gap-6">
    <Image src="/logo.svg" alt="logo" width={118} height={118} className="object-contain" />
   <p className="text-base text-grey-700">
    Carhub 2023 <br/>
    All Rights Reserved &copy;
   </p>
   </div>
   <div className="footer__links">
    {footerLinks.map((item)=>(
      <div key={item.title} className="footer__link">
        <h3 className="foot-bold">{item.title}</h3>
        <div className="flex flex-col gap-5">
          {item.links.map((link)=>(
            <Link key={link.title}
            href={link.url}
            className="text-grey-500"> {link.title}</Link>
          ))}
      </div>
      </div>
    ))}
   </div>
     </div>
  </footer>

  )


export default Footer