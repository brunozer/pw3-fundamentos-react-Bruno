function Livro({dadosJSON}) {
  return (
    <>
    {
        dadosJSON.map((livro)=>(
       
          <div className='cardBook'>
              <h1>{livro.titulo}</h1>
              <h3>{livro.autor}</h3>

              <img src={livro.imagem} className="Livro_imagem" alt="capa livro as cavernas de-aço" />
              <p>{livro.descricao}</p>
           </div>
          
        ))
      }
    </>
   
  );
}

export default Livro;
