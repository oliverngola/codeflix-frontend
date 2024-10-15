'use client'
import React from 'react'
import { AuthForm } from '@/app/components/AuthForm'

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted');
    e.preventDefault();
  }

  return (
    <AuthForm formType='login' onSubmit={handleSubmit} />
  )
}