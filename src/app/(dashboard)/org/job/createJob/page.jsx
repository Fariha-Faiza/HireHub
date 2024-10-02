"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from '@/hooks/use-toast'
import LeftSidebar from '@/components/ui/layout/leftSidebar'


export default function JobPostingForm() {
  const [isSaving, setIsSaving] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    defaultValues: {
      jobTitle: "",
      designation: "",
      jobType: "full-time",
      requirements: "",
      department: "",
      salary: "",
      location: "",
      description: "",
    }
  })

  const onSubmit = (data) => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSaving(false)
      toast({
        title: "Job Posted",
        description: "Your job has been successfully posted.",
      })
      reset()
    }, 2000)
  }

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <LeftSidebar/>
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Job Posting</CardTitle>
        <CardDescription>Fill out the form below to create a new job posting.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Software Engineer" {...field} {...register("jobTitle", { required: "Job title is required" })} />
                    </FormControl>
                    <FormMessage>{errors.jobTitle?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Senior Developer" {...field} {...register("designation", { required: "Designation is required" })} />
                    </FormControl>
                    <FormMessage>{errors.designation?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a job type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage>{errors.jobType?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Engineering" {...field} {...register("department", { required: "Department is required" })} />
                    </FormControl>
                    <FormMessage>{errors.department?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 75000" {...field} {...register("salary", { required: "Salary is required", pattern: { value: /^\d+$/, message: "Please enter a valid number" } })} />
                    </FormControl>
                    <FormDescription>Annual salary in USD</FormDescription>
                    <FormMessage>{errors.salary?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. New York, NY" {...field} {...register("location", { required: "Location is required" })} />
                    </FormControl>
                    <FormMessage>{errors.location?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List the key requirements for this position"
                      className="min-h-[100px]"
                      {...field}
                      {...register("requirements", { required: "Requirements are required", minLength: { value: 10, message: "Requirements must be at least 10 characters long" } })}
                    />
                  </FormControl>
                  <FormMessage>{errors.requirements?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a detailed description of the job"
                      className="min-h-[150px]"
                      {...field}
                      {...register("description", { required: "Job description is required", minLength: { value: 10, message: "Job description must be at least 10 characters long" } })}
                    />
                  </FormControl>
                  <FormMessage>{errors.description?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Job Posting"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    </div>
  )
}