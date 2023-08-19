import Image from "next/image";
import Link from "next/link"
import freeImage from "@/assets/freeImage.jpg"

export default function Home() {
  return (
    <section className="">
      <header style={{'boxShadow': "0 3px 3px 0 rgba(0,0,0,.1)"}} className="bg-white h-[60px] flex flex-row justify-between py-2.5 px-8">
        <div className="font-bold">nairarefill</div>
        <div className="flex gap-2.5">
          <button className="bg-[#f48023] rounded py-1.5 px-[15px] text-white text-xl font-bold">
            Register
          </button>
          <button className="text-[#f48023] bg-white rounded py-1.5 px-[15px] border-[#f48023] text-xl font-bold">
            Login
          </button>
        </div>
      </header>

      <main className="flex w-screen h-[90vh] mt-1">
        <div className="w-[40vw] bg-gray-50 flex flex-col items-center justify-center">
          <h3 className=" font-bold text-[30px] mb-2.5 ">We've Missed You</h3>
          <p className="text-lg mb-2.5 max-w-xs">
            Kindly signin and get first access to the very best, community and
            unlock more opportunities.
          </p>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label>Email:</label>
              <input
                type="email"
                className="w-[320px] border py-[7px] px-[15px] border-[#757575] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label>Password:</label>
              <input
                type="password"
                className="w-[320px] border py-[7px] px-[15px] border-[#757575] outline-none"
              />
            </div>
            <button className="w-full bg-[#f48023] py-[7px] px-[15px] text-white">Login</button>
          </form>
          <div className=" w-full pl-[110px]">
          <p className="text-xs mt-2.5">Forgot username or password?</p>
          <p className="text-xs mt-2.5">Don't have an account? <Link href="" className="text-[#0000FF]">Sign up </Link></p>
          </div>
        </div>
        <div className="relative">
          <Image src={freeImage} alt="" width={500} height={500} className="w-full h-full" />
          <div className="absolute bottom-16 left-16 max-w-[300px] text-white text-lg">
            <span className=" font-extrabold">Nairarefill- </span>
            The business networking platform.
          </div>
        </div>
      </main>
    </section>
  );
}
