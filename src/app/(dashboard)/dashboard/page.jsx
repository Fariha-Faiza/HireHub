

import * as React from "react"
import Link from "next/link"
import {
  Bell,
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  CircleUser,
  FileText,
  Home,
  LineChart,
  Mail,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Briefcase className="h-6 w-6" />
          <span className="">HireHub</span>
        </Link>
        <div className="flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, candidates..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 overflow-y-auto border-r bg-muted/40">
          <nav className="flex flex-col gap-2 p-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="jobs">
                <AccordionTrigger className="py-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4" />
                    Jobs
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pl-7">
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      All Jobs
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Create Job
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Job Categories
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="candidates">
                <AccordionTrigger className="py-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4" />
                    Candidates
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pl-7">
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      All Candidates
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Shortlisted
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Interviews
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Building2 className="h-4 w-4" />
              Companies
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Messages
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="mb-4 text-2xl font-bold">Job Management Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Active Jobs", icon: <Briefcase className="h-4 w-4" /> },
              { title: "Total Applicants", icon: <Users className="h-4 w-4" /> },
              { title: "Interviews Scheduled", icon: <Calendar className="h-4 w-4" /> },
              { title: "Positions Filled", icon: <FileText className="h-4 w-4" /> },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">{item.title}</h2>
                  {item.icon}
                </div>
                <p className="mt-2 text-2xl font-bold">{Math.floor(Math.random() * 100)}</p>
              </div>
            ))}
          </div>
          <h2 className="mb-4 mt-8 text-xl font-semibold">Recent Job Postings</h2>
          <div className="rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-2 text-left font-medium">Job Title</th>
                    <th className="px-4 py-2 text-left font-medium">Company</th>
                    <th className="px-4 py-2 text-left font-medium">Location</th>
                    <th className="px-4 py-2 text-left font-medium">Applicants</th>
                    <th className="px-4 py-2 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { title: "Software Engineer", company: "TechCorp", location: "Remote", applicants: 45, status: "Active" },
                    { title: "Product Manager", company: "InnovateCo", location: "New York, NY", applicants: 32, status: "Active" },
                    { title: "UX Designer", company: "DesignHub", location: "San Francisco, CA", applicants: 28, status: "Closed" },
                    { title: "Data Analyst", company: "DataDrive", location: "Chicago, IL", applicants: 19, status: "Active" },
                    { title: "Marketing Specialist", company: "GrowthInc", location: "Austin, TX", applicants: 37, status: "Active" },
                  ].map((job, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{job.title}</td>
                      <td className="px-4 py-2">{job.company}</td>
                      <td className="px-4 py-2">{job.location}</td>
                      <td className="px-4 py-2">{job.applicants}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}