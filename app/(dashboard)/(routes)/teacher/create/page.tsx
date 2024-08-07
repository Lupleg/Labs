"use client";

import axios from "axios";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import  {  useRouter } from "next/router";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage

} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { resolve } from "path";


const formSchema = z.object({
  title: z.string().min(1,{
    message: "Title is required"
  }),
  })

const CreatePage = () => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div>
      Create page
    </div>
  )
}

export default CreatePage;
