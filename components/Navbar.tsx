import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => (
  <header className="w-full absolute border-2 z-10">
    <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href='/' className="flex justify-center items-center">
        <Image src="/logo.svg" 
        alt="logo"
        width={118}
        height={118}
        className="object-contain" />

      </Link>
      <CustomButton 
      title="sign in"
      btnType="button"
      containerStyles="text-primary-blue rounded-full bg-white main-w-[130px]" />
    </nav>
  </header>
);

export default Navbar;
