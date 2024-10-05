import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import * as z from 'zod';
import Card from '../components/Card';
import ButtonMS from '../components/ButtonMS';
import Logo from '../components/Logo';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import Modal from '../components/Modal';

// Definindo o esquema de validação com Zod
const signUpSchema = z.object({
  name: z.string().min(8, { message: 'É necessário nome completo' }),
  email: z.string().email({ message: 'Endereço de e-mail inválido' }),
  password: z.string().min(6, { message: 'Senha precisa de 6 digitos' }),
});

// Função para realizar o POST da API de registro com fetch
const registerUser = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Erro no registro');
  }

  return await res.json(); // Retorna a resposta da API
};

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  const [responseMessage, setResponseMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  // Use mutate to handle POST with SWR
  const onSubmit = async (data) => {
    setErrorMessage('');
    try {
      // Mutate does not refetch, it allows us to update local state manually
      const response = await mutate(
        `${import.meta.env.VITE_API_URL}/api/register`, // Chave da requisição
        () => registerUser(`${import.meta.env.VITE_API_URL}/api/register`, data), // Chamada da API
        false // Não revalidar automaticamente
      );

      console.log('Usuário registrado com sucesso:', response);

      // Definindo a mensagem de resposta e abrindo o modal
      setResponseMessage(`Usuário registrado com sucesso: ${response.user.name} (${response.user.email})`);
      setModalOpen(true);

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
      <Card>
        <Logo />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Começar com <span className="text-primary-100">Mastra</span>
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">Crie sua conta</p>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input de Nome Completo */}
          <Input
            label="Full Name"
            type="text"
            placeholder="Nome completo"
            icon={<FiUser className="w-5 h-5 text-gray-500" />}
            {...register('name')}
            error={errors.name?.message}
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
          <ButtonMS type="submit">
            Confirmar
          </ButtonMS>

          {/* Link para login */}
          <div className="text-sm text-center text-gray-600 mt-4">
            Já possui uma conta? <Link to="/login" className="text-primary-100 hover:underline">Login</Link>
          </div>
        </form>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-lg font-bold mb-4">Sucesso!</h2>
          <p>{responseMessage}</p>
        </Modal>

      </Card>
    </div>
  );
};

export default SignUp;
