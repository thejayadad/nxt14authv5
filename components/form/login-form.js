'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@nextui-org/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import HeadingText from '../heading-text';
import { authenicate } from '@/lib/actions/user/login-user';

// Define schema using Yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsAuthenticating(true);
    try {
      await authenicate(data);
      toast.success('Login successful!');
      router.push('/');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className='flex flex-col gap-4 border rounded-xl p-4 bg-white'>
      <HeadingText
        title={'Welcome to Share My Ride'}
        subtitle={'Login to your account below'}
        center
      />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-4'>
            <span>Email</span>
            <Input
              type='email'
              {...register('email')}
              status={errors.email ? 'error' : 'default'}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div className='mt-4'>
            <span>Password</span>
            <Input
              type='password'
              {...register('password')}
              status={errors.password ? 'error' : 'default'}
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <Button
            className='w-full mt-4'
            type='submit'
            disabled={isAuthenticating}
          >
            {isAuthenticating ? 'One moment...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
