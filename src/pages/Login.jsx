import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiLock, FiMail } from "react-icons/fi";
import * as z from 'zod';
import Card from '../components/Card';
import ButtonMS from '../components/ButtonMS';
import Logo from '../components/Logo';
import Input from '../components/Input';

// Definindo o esquema de validação com Zod
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
      <Card>
        <Logo />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome back!</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input de email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Email Address"
            icon={<FiMail className="w-5 h-5 text-gray-500" />}
            {...register('email')}
            error={errors.email?.message} // Exibe erro do email
          />

          {/* Input de senha */}
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            icon={<FiLock className="w-5 h-5 text-gray-500" />}
            {...register('password')}
            error={errors.password?.message} // Exibe erro de senha
          />

          {/* Link de recuperar senha */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-primary-100 hover:underline">Recover Password</a>
          </div>

          {/* Botão de login */}
          <ButtonMS type="submit">Login</ButtonMS>

          {/* Link para cadastro */}
          <div className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account? <a href="#" className="text-primary-100 hover:underline">Sign Up</a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
