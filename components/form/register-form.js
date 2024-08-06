'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import { toast, Toaster } from 'react-hot-toast';
import { registerUser } from '@/lib/actions/user/register-user';
import HeadingText from '../heading-text';
import Link from 'next/link';
import {signIn} from "next-auth/react"

// Define schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});



const RegisterForm = () => {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      toast.success('Registration successful!');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  const social = (provider) => {
    signIn(provider), {
   
    }
  }

  return (
    <div className='flex flex-col gap-4 border rounded-xl p-4 bg-white'>
      <div className='flex text-center flex-row items-center justify-center'>
        <Image
          src='/logo.png'
          width={70}
          height={70}
          alt='logo'
        />
        <span>Drive Swap</span>
      </div>

      <HeadingText
        title={'Welcome to Share My Ride'}
        subtitle={'Create an account below'}
        center
      />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex space-x-2'>
            <div>
              <span className='px-2'>First Name</span>
              <Input
                autoComplete='off'
                placeholder='First Name'
                {...register('firstName')}
                status={errors.firstName ? 'error' : 'default'}
              />
              {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
            </div>
            <div>
              <span className='px-2'>Last Name</span>
              <Input
                autoComplete='off'
                placeholder='Last Name'
                {...register('lastName')}
                status={errors.lastName ? 'error' : 'default'}
              />
              {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
          </div>
          <p className='px-2 font-light text-small text-neutral-800'>
            Enter your name as it appears on your drivers license
          </p>
          <div className='mt-4'>
            <span>Email</span>
            <Input
              placeholder='Email'
              {...register('email')}
              status={errors.email ? 'error' : 'default'}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div className='mt-4'>
            <span>Password</span>
            <Input
              placeholder='Password'
              type='password'
              {...register('password')}
              status={errors.password ? 'error' : 'default'}
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <Button
            className='w-full mt-4'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Sign Up'}
          </Button>
        </form>
      </div>

      <div className='border-t mt-6'>
        <Link
        href={'/social'}
        >
        <Button>
          Login With Google
        </Button>
        </Link>
{/*  
                <Button
                onClick={() => social("google")}
        className='w-full mt-8'>Login With Google</Button> */}

      </div>
      <Toaster />
    </div>
  );
};

export default RegisterForm;
