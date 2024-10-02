
"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Menu , Briefcase, Users, FileText, Settings, LayoutDashboard, BriefcaseBusiness, Building2, Bell} from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useRouter } from 'next/router'
import JobPostingForm from '@/app/(dashboard)/org/job/createJob/page'
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
  // const router = useRouter()
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
        { label: 'Create new job',
         
          component: <JobPostingForm />
         },
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
               
                onClick={() => handleComponentChange(child.component)}
                style={{ display: 'block', margin: '5px 0' }}
              />
            ))}
          </MenuItem>
        ))}
      </nav>
    </div>
  )
}

export default LeftSidebar