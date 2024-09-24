"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, ChevronDown, ChevronRight, Menu, Search, User, Briefcase, Users, FileText, Settings, LayoutDashboard, PlusCircle } from "lucide-react"
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
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsCollapsed(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
  }

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

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`${isCollapsed ? 'w-16' : 'w-64'} flex flex-col bg-secondary transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && <h1 className="text-2xl font-bold text-primary">JobManager</h1>}
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

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-background border-b">
          <div className="flex items-center">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h2 className="text-lg font-semibold">Job Management Dashboard</h2>
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
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Welcome to JobManager</h1>
            <p className="text-muted-foreground">Manage your jobs, clients, and reports efficiently.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Active Jobs</h3>
              <p className="text-3xl font-bold">24</p>
              <Link href="#" className="text-primary hover:underline mt-2 inline-block">View all active jobs</Link>
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Pending Approvals</h3>
              <p className="text-3xl font-bold">7</p>
              <Link href="#" className="text-primary hover:underline mt-2 inline-block">Review pending approvals</Link>
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">This Month's Revenue</h3>
              <p className="text-3xl font-bold">$52,389</p>
              <Link href="#" className="text-primary hover:underline mt-2 inline-block">View financial reports</Link>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Recent Jobs</h2>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Job
              </Button>
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3">Job ID</th>
                    <th className="text-left p-3">Client</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">JOB-2023-001</td>
                    <td className="p-3">Acme Corp</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span></td>
                    <td className="p-3">2023-06-30</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">JOB-2023-002</td>
                    <td className="p-3">TechStart Inc</td>
                    <td className="p-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span></td>
                    <td className="p-3">2023-07-15</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">JOB-2023-003</td>
                    <td className="p-3">Global Solutions</td>
                    <td className="p-3"><span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span></td>
                    <td className="p-3">2023-07-05</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
