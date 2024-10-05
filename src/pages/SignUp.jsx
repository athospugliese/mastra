import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import * as z from 'zod';
import Card from '../components/Card';
import ButtonMS from '../components/ButtonMS';
import Logo from '../components/Logo';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

// Definindo o esquema de validação com Zod
const signUpSchema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const SignUp= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
      <Card>
        <Logo />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Começar com <span className="text-primary-100">Mastra</span>
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">Crie sua conta</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input de Nome Completo */}
          <Input
            label="Full Name"
            type="text"
            placeholder="Nome completo"
            icon={<FiUser className="w-5 h-5 text-gray-500" />}
            {...register('fullName')}
            error={errors.fullName?.message}
          />

          {/* Input de email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="E-mail"
            icon={<FiMail className="w-5 h-5 text-gray-500" />}
            {...register('email')}
            error={errors.email?.message}
          />

          {/* Input de senha */}
          <Input
            label="Password"
            type="password"
            placeholder="Senha"
            icon={<FiLock className="w-5 h-5 text-gray-500" />}
            {...register('password')}
            error={errors.password?.message}
          />

          {/* Botão de login */}
          <ButtonMS type="submit">Confirmar</ButtonMS>

          {/* Link para login */}
          <div className="text-sm text-center text-gray-600 mt-4">
            Já possui uma conta? <Link to="/login"  className="text-primary-100 hover:underline">Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
