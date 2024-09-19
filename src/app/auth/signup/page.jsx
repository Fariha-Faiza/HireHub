import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"




export const description1 =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function SignUp() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">SignUp</h1>
 
      <p className="text-balance text-muted-foreground">
      Enter your information to create an account
            </p>
       </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with GitHub
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login" className="underline">
          Sign in
        </Link>
      </div>
  
  </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/hire.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import SignUp from './page';

// export const description =
//   "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

//   export default function SignUp() {
//   return (
//     <Card className="mx-auto max-w-sm">
//     <CardHeader>
//       <CardTitle className="text-xl">Sign Up</CardTitle>
//       <CardDescription>
//         Enter your information to create an account
//       </CardDescription>
//     </CardHeader>
//     <CardContent>
//       <div className="grid gap-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="first-name">First name</Label>
//             <Input id="first-name" placeholder="Max" required />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="last-name">Last name</Label>
//             <Input id="last-name" placeholder="Robinson" required />
//           </div>
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="m@example.com"
//             required
//           />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" />
//         </div>
//         <Button type="submit" className="w-full">
//           Create an account
//         </Button>
//         <Button variant="outline" className="w-full">
//           Sign up with GitHub
//         </Button>
//       </div>
//       <div className="mt-4 text-center text-sm">
//         Already have an account?{" "}
//         <Link href="#" className="underline">
//           Sign in
//         </Link>
//       </div>
//     </CardContent>
//   </Card>
//   )
// }

