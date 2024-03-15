import { useState } from 'react';
function CreateUser() {

    const [name, setName] = useState("")
    const [cpf, setcpf] = useState("")
    const [rg, setRg] = useState("")
    const [telefoneAluno, setTelefoneAluno] = useState("")
    const [telefoneResponsavel, setTelefoneResponsavel] = useState("")
    const [email, setEmail] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")


    function createAluno(e){
    e.preventDefault()
    console.log({
        name: name,
         cpf: cpf, 
         rg: rg, 
         telefoneAluno:telefoneAluno, 
         telefoneResponsavel:telefoneResponsavel, 
         email:email,
          dataNascimento: dataNascimento
        })

    }
    return(
        <>
            <div className='container'>
            <form className='form' onSubmit={createAluno}>
             
                <h1>Cadastro de aluno</h1>
                  <label>Nome:</label>
                <input
                type='text'
                placeholder='digite o nome'
                value={name}
                onChange={(e)=> {setName(e.target.value)}}
                />
                <label>CPF:</label>
                <input
                type='text'
                placeholder='digite o cpf'
                value={cpf}
                onChange={(e)=> {setcpf(e.target.value)}}
                />
                <label>Rg:</label>
                <input  
                type='text'
                placeholder='digite o rg'
                value={rg}
                onChange={(e)=> {setRg(e.target.value)}}
                />
                <label>Telefone:</label>
                <input 
                type='text'
                placeholder='digite o telefone do aluno'
                value={telefoneAluno}
                onChange={(e)=> {setTelefoneAluno(e.target.value)}}
                />
                <label>Turma:</label>
                <select name='' id='' placeholder='digite a turma'>
                    <option>selecione a turma</option>
                </select>

                 <label>Telefone do responsável:</label>                
                <input  
                type='text'
                placeholder='digite o telefone do responsável'
                value={telefoneResponsavel}
                onChange={(e)=> {setTelefoneResponsavel(e.target.value)}}
                />

               <label>Email</label>                    
                <input  
                type='email'
                placeholder='digite o email'
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}
                />
                         
               <label>Data de nascimento</label>            
                <input  
                type='date'
                placeholder='digite data de nascimento'
                value={dataNascimento}
                onChange={(e)=> {setDataNascimento(e.target.value)}}
                />
                <button type='submit'>Cadastrar</button>
            </form>
            </div>
        </>
    )
}


export default CreateUser;