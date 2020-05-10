import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} width="170" alt="GoBarber" />

        <Form initialData={{ name: 'John' }} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="text" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="place">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
