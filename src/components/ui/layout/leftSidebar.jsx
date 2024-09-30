

// import React, { useState } from 'react'
// import Link from 'next/link'
// import { Bell, ChevronDown, ChevronRight, Menu, Search, User, Briefcase, Users, FileText, Settings, LayoutDashboard, PlusCircle } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { 
//   UserPlus,
//   FileCheck
// } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// const LeftSidebar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//     const [isCollapsed, setIsCollapsed] = useState(false)
//     const [activeSubmenu, setActiveSubmenu] = useState(null)
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
//     const menuItems = [
//       { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, href: "#" },
//       {
//         name: "Jobs",
//         icon: <Briefcase className="h-4 w-4" />,
//         submenu: [
//           { name: "All Jobs", href: "#" },
//           { name: "Active Jobs", href: "#" },
//           { name: "Completed Jobs", href: "#" },
//         ],
//       },
//       { name: "Clients", icon: <Users className="h-4 w-4" />, href: "#" },
//       { name: "Reports", icon: <FileText className="h-4 w-4" />, href: "#" },
//       { name: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
//     ]
//     const toggleSubmenu = (submenu) => {
//       setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
//     }
//   return (
//     <div>
//        <aside className={`${isCollapsed ? 'w-16' : 'w-64'} flex flex-col bg-secondary transition-all duration-300 ease-in-out`}>
//         <div className="p-4 flex items-center justify-between">
//           {!isCollapsed && <h1 className="text-2xl font-bold text-primary">HireHub</h1>}
//           <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
//             <Menu className="h-4 w-4" />
//           </Button>
//         </div>
//         <nav className="flex-1 overflow-y-auto">
//           <TooltipProvider>
//             {menuItems.map((item, index) => (
//               <div key={index}>
//                 {item.submenu ? (
//                   <Collapsible>
//                     <CollapsibleTrigger asChild>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <button
//                             onClick={() => toggleSubmenu(item.name)}
//                             className={`flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-accent hover:text-accent-foreground ${isCollapsed ? 'justify-center' : ''}`}
//                           >
//                             {item.icon}
//                             {!isCollapsed && (
//                               <>
//                                 <span className="ml-2">{item.name}</span>
//                                 {activeSubmenu === item.name ? (
//                                   <ChevronDown className="ml-auto h-4 w-4" />
//                                 ) : (
//                                   <ChevronRight className="ml-auto h-4 w-4" />
//                                 )}
//                               </>
//                             )}
//                           </button>
//                         </TooltipTrigger>
//                         {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
//                       </Tooltip>
//                     </CollapsibleTrigger>
                   
//                       {!isCollapsed && activeSubmenu === item.name && (
//                         <div className="pl-6 bg-background">
//                           {item.submenu.map((subItem, subIndex) => (
//                             <Link
//                               key={subIndex}
//                               href={subItem.href}
//                               className="block px-4 py-2 text-sm text-gray-600 hover:bg-accent hover:text-accent-foreground"
//                             >
//                               {subItem.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
                  
               
                  
//                   </Collapsible>
//                 ) : (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Link
//                         href={item.href}
//                         className={`flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-accent hover:text-accent-foreground ${isCollapsed ? 'justify-center' : ''}`}
//                       >
//                         {item.icon}
//                         {!isCollapsed && <span className="ml-2">{item.name}</span>}
//                       </Link>
//                     </TooltipTrigger>
//                     {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
//                   </Tooltip>
//                 )}
//               </div>
//             ))}
//           </TooltipProvider>
//         </nav>
//       </aside>
//     </div>
//   )
// }

// export default LeftSidebar


"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Menu , Briefcase, Users, FileText, Settings, LayoutDashboard, BriefcaseBusiness, Building2, Bell} from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const MenuItem = ({ icon: Icon, label, children, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubmenu = children && children.length > 0

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-left font-normal",
                !isCollapsed && "px-2",
                isCollapsed && "px-0"
              )}
              onClick={() => hasSubmenu && setIsOpen(!isOpen)}
            >
              {Icon && <Icon className={cn("h-4 w-4 mr-2", isCollapsed && "mr-0")} />}
              {!isCollapsed && (
                <>
                  <span>{label}</span>
                  {hasSubmenu && (
                    <ChevronDown
                      className={cn(
                        "ml-auto h-4 w-4 transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                      )}
                    />
                  )}
                </>
              )}
            </Button>
          </TooltipTrigger>
          {isCollapsed && <TooltipContent side="right">{label}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      {hasSubmenu && !isCollapsed && (
        <div
          className={cn(
            "pl-4 mt-1 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96" : "max-h-0"
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const LeftSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard',
      children: [
        { label: 'Job-status overview'},
        { label: 'Upcoming interviews'},
        { label: 'Job performance '},
        { label: 'Applicant status' },
      ],
     },
    {
      icon: BriefcaseBusiness,
      label: 'Job Management',
      children: [
        { label: 'View all job'},
        { label: 'Create new job' },
      ],
    },
    {
      icon: Users,
      label: 'Applicants',
      children: [
        { label: 'View Applicants' },
        { label: 'Shortlisted Applicants' },
      
      ],
    },
    { 
      icon: Building2,
      label: 'Profile management' ,
      children: [
        { label: 'Organization Profile' },
        // { label: 'xyz' },
      
      ],
      
      },
    { 
      icon: Bell, 
      label: 'Notification' ,
      children: [
        { label: 'Notification Settings' },
        // { label: 'xyz' },
      
      ],},
  ]

  return (
    <div className={cn(
      "flex flex-col h-screen bg-background border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && <h1 className="text-xl font-bold">HireHub</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          <Menu className={cn(
            "h-4 w-4 transition-transform duration-200",
            isCollapsed ? "rotate-180" : ""
          )} />
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            isCollapsed={isCollapsed}
          >
            {item.children && item.children.map((child, childIndex) => (
              <MenuItem
                key={childIndex}
                label={child.label}
                isCollapsed={isCollapsed}
              />
            ))}
          </MenuItem>
        ))}
      </nav>
    </div>
  )
}

export default LeftSidebar