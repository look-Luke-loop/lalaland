"use client";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useState } from "react";
//biblioteca para conectar api
import axios from "axios";



export default function Home() {
  const [data, setData] = useState({
    name:'',
    email:''
  });
  const [message, setMessage] = useState('');

  const valorinput = e => setData({...data, [e.target.name]: e.target.value});
  const sendUser = async (e) => {
    e.preventDefault();

    console.log(`Nome: ${data.name}`);
    console.log(`Email: ${data.email}`);

    const headers = {
      'headers': {
        //indica oq você tá enviando e o formato
        'Content-Type': 'application/json'

      }
    }

    await axios.post('http://localhost:8080/users', data, headers)
    .then((response) => {//acessado quando der certo
      setMessage(response.data.message);
      //limpo os dados do form
      setData({
        name:'',
        email:''
      });
    }).catch((err) => {//acessado quando der errado
      setMessage(err.esponse.data.message);
    })
  }
  return(
    <main>
      <Menu/>
      <div>
        <h2>formulário fofinho</h2>
        <div>
          {/* imprime a mensagem retorno da api */}
          {message ? <p>{message}</p>:""}
          <form onSubmit={sendUser}>
            <label>Nome: </label>
            <input type= "text" name="name" placeholder="digite o nome" onChange={valorinput} value={data.name}></input><br/><br/>

            <label>Email: </label>
            <input type= "email" name="email" placeholder="digite o seu email" onChange={valorinput} value={data.email}></input><br/><br/>
            <button type="submit">enviar</button><br/>
          </form>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
