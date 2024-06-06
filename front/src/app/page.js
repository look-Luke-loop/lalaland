"use client";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  const valorinput = e => setData({ ...data, [e.target.name]: e.target.value });

  const sendUser = async (e) => {
    e.preventDefault();

    console.log(`Nome: ${data.name}`);
    console.log(`Email: ${data.email}`);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.post('http://18.118.147.71:3001/users', data, headers);
      setMessage(response.data.message);
      setData({
        name: '',
        email: ''
      });
      fetchUsers(); // Atualiza a lista de usuários após adicionar um novo
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erro desconhecido');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://18.118.147.71:3001/userlist');
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setUsers([]); // Garante que users seja uma array mesmo em caso de erro
    }
  };

  useEffect(() => {
    fetchUsers(); // Busca os usuários quando o componente é montado
  }, []);

  return (
    <main>
      <Menu />
      <div>
        <h2>Formulário Fofinho</h2>
        <div>
          {message ? <p>{message}</p> : ""}
          <form onSubmit={sendUser}>
            <label>Nome: </label>
            <input
              type="text"
              name="name"
              placeholder="Digite o nome"
              onChange={valorinput}
              value={data.name}
            /><br /><br />
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              onChange={valorinput}
              value={data.email}
            /><br /><br />
            <button type="submit">Enviar</button><br />
          </form>
        </div>
        <div>
          <h2>Lista de Usuários</h2>
          <table border="1">
            <thead>
              <tr>
                <th>UID</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="3">Nenhum usuário encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
}
