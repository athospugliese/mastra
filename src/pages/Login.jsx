import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiLock, FiMail } from "react-icons/fi";
import * as z from 'zod';
import Card from '../components/Card';
import ButtonMS from '../components/ButtonMS';
import Logo from '../components/Logo';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authProvider.jsx';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const loginUser = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Erro no login');
  }

  return await res.json(); // Retorna a resposta da API
};

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Usar o contexto para login
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setErrorMessage('');
    try {
      const response = await loginUser(`${import.meta.env.VITE_API_URL}/api/login`, data);
      console.log('Login bem-sucedido:', response);

      // Salvar o token no contexto de autenticação
      login(response.token);

      // Redirecionar para o dashboard
      navigate('/dashboard');

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
      <Card>
        <Logo />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Bem vindo de volta!</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Acesse sua conta</p>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
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

          {/* Link de recuperar senha */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-primary-100 hover:underline">Esqueci a senha</a>
          </div>

          {/* Botão de login */}
          <ButtonMS type="submit">Login</ButtonMS>

          {/* Link para cadastro */}
          <div className="text-sm text-center text-gray-600 mt-4">
            Não possui uma conta? <Link to="/signup" className="text-primary-100 hover:underline">Sign Up</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
