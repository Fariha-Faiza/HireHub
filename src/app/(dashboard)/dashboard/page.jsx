
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, ChevronDown, ChevronRight, Menu, Search, User, Briefcase, Users, FileText, Settings, LayoutDashboard, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  UserPlus,
  FileCheck
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, href: "#" },
    {
      name: "Jobs",
      icon: <Briefcase className="h-4 w-4" />,
      submenu: [
        { name: "All Jobs", href: "#" },
        { name: "Active Jobs", href: "#" },
        { name: "Completed Jobs", href: "#" },
      ],
    },
    { name: "Clients", icon: <Users className="h-4 w-4" />, href: "#" },
    { name: "Reports", icon: <FileText className="h-4 w-4" />, href: "#" },
    { name: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
  ]
  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
  }

  console.log("menuitems", menuItems.map((x=>x.submenu)) )
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${isCollapsed ? 'w-16' : 'w-64'} flex flex-col bg-secondary transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && <h1 className="text-2xl font-bold text-primary">HireHub</h1>}
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <TooltipProvider>
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className={`flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-accent hover:text-accent-foreground ${isCollapsed ? 'justify-center' : ''}`}
                          >
                            {item.icon}
                            {!isCollapsed && (
                              <>
                                <span className="ml-2">{item.name}</span>
                                {activeSubmenu === item.name ? (
                                  <ChevronDown className="ml-auto h-4 w-4" />
                                ) : (
                                  <ChevronRight className="ml-auto h-4 w-4" />
                                )}
                              </>
                            )}
                          </button>
                        </TooltipTrigger>
                        {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                      </Tooltip>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {!isCollapsed && activeSubmenu === item.name && (
                        <div className="pl-6 bg-background">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-accent hover:text-accent-foreground"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </CollapsibleContent>

                    {/* <div onClick={() =>toggleSubmenu('Jobs')} className="menu-item cursor-pointer">
          Jobs
        </div>
        {activeSubmenu === 'Jobs' && (
          <div className="pl-4">
            <Link href="#" className="submenu-item">All Jobs</Link>
            <Link href="#" className="submenu-item">Create Job</Link>
            <Link href="#" className="submenu-item">Job Categories</Link>
          </div>
        )}
      </div> */}
                  </Collapsible>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-accent hover:text-accent-foreground ${isCollapsed ? 'justify-center' : ''}`}
                      >
                        {item.icon}
                        {!isCollapsed && <span className="ml-2">{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                )}
              </div>
            ))}
          </TooltipProvider>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
       
          
            <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] md:w-[300px]"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
        </header>

        {/* Main content area */}
        <main className="bg-white flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Jobs
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Candidates
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,429</div>
                <p className="text-xs text-muted-foreground">
                  +201 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  New Applications
                </CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  +9% from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Interviews Scheduled
                </CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">
                  For the next 7 days
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Open Job Listings</h2>
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Senior React Developer</TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>Remote</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Product Manager</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>New York, NY</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">UX Designer</TableCell>
                    <TableCell>Design</TableCell>
                    <TableCell>San Francisco, CA</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sales Representative</TableCell>
                    <TableCell>Sales</TableCell>
                    <TableCell>Chicago, IL</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Marketing Specialist</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell>Remote</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}


