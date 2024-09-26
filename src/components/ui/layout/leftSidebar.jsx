

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
const LeftSidebar = () => {
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
  return (
    <div>
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
                    <CollapsibleContent >
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
    </div>
  )
}

export default LeftSidebar
