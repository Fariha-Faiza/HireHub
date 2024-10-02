import SignUp from "./auth/signup/page";
import Image from "next/image"


export default function Home() {
  return (
   <div>

<div className="hidden bg-muted lg:block">
        <Image
          src="/OIG3.8zWN85.jpeg"
          alt="Image"
          width="1920"
          height="1080"
         className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
   </div>
  );
}
