'use client'

import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Spinner, TextArea, TextField } from '@radix-ui/themes';

export default function ContactForm (){

    const dataSourceFormSchema = Yup.object().shape({
        name: Yup.string().required('Your Name is required'),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Type your message'),
      })
    
      const {
        register: register,
        handleSubmit: handleFormSubmit,
        reset: resetForm,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(dataSourceFormSchema),
      })
    
      const handleSubmit = async (data: any) => {
    
        try {
          const post_data = JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message
          })
    
          const response = await fetch('/api/contact', { method: 'POST', body: post_data })
          if (await response) {
            const data = await response.text()
            if (response.ok) {
              resetForm();
              alert(data);
            }
          }
        } catch (err) {
          console.log(err)
        }
      }

      
    return (
        <Form.Root onSubmit={handleFormSubmit(handleSubmit)}>
        <Flex direction={'column'} gap={'5'}>
        <Form.Field name={"name"} serverInvalid={errors.name != null}>
          {/* <FormLabel htmlFor={'name'}>Your Full Name:</FormLabel> */}
          <TextField.Root placeholder="Your Name" id="name" {...register('name')} size={'3'} />
          {errors.name?.message && <Form.Message>{errors.name?.message}</Form.Message>}
        </Form.Field>

        <Form.Field name={"email"} serverInvalid={errors.email != null}>
        {/* <FormLabel htmlFor={'name'}>Your Email:</FormLabel> */}
          <TextField.Root placeholder="Email Address" type={'email'} id="email" {...register('email')} size={'3'} />
          {errors.email?.message && <Form.Message>{errors.email?.message}</Form.Message>}
        </Form.Field>


        <Form.Field name={"message"} serverInvalid={errors.message != null}>
          {/* <FormLabel htmlFor={'name'}>Your Message:</FormLabel> */}
          <TextArea placeholder="Message" id="message" {...register('message')} rows={5} size={'3'} />
          {errors.message?.message && <Form.Message>{errors.message?.message}</Form.Message>}
        </Form.Field>

        <Button type={'submit'} disabled={isSubmitting} highContrast size={'3'}><Spinner loading={isSubmitting} /> {isSubmitting?'Sending ...':'Send Message'}</Button>
        </Flex>
      </Form.Root>

    )
}