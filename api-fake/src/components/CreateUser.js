import { useState } from 'react'
import axios from 'axios'
function CreateUser() {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  function createUser(e) {
    e.preventDefault()
    let user = JSON.stringify({ name: name, job: job })
    console.log(user)

    axios
      .post('https://reqres.in/api/users', user)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <form onSubmit={createUser}>
        <h1>formulario de cadastro</h1>
        <input
          placeholder="digite seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <input
          placeholder="digite sua profissão"
          value={job}
          onChange={(e) => {
            setJob(e.target.value)
          }}
        />

        <input
          placeholder="digite sua profissão"
          value={job}
          onChange={(e) => {
            setJob(e.target.value)
          }}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default CreateUser
