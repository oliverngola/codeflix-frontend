'use client'
import React from 'react'
import { AuthForm } from '@/app/components/AuthForm'

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit from register form');
    e.preventDefault();
  }

  return (
    <AuthForm formType='register' onSubmit={handleSubmit} />
  )
}
