import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const Formulario = styled.form`
  width:100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`
const Select = styled.select`
  flex:1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: 'Lato', sans-serif;
`


const useFiltro = () => {

  // Definir el STATE
  const [categoria, guardarCategoria] = useState('');

  const resultado = useStaticQuery(graphql`
  query {
    allStrapiCategorias {
      nodes {
        id
        nombre
      }
    }
  }
  `);

  const categorias = resultado.allStrapiCategorias.nodes;

  const FiltroUI = () => (
    <Formulario>
      <Select
        onChange={e => guardarCategoria(e.target.value)}
        value={categoria}
      >
        <option value="">-- Filtro por Categorías --</option>
        {categorias.map(opcion => (

          <option
            key={opcion.id}
          >{opcion.nombre}</option>

        ))}
      </Select>
    </Formulario>
  )

  return {
    categoria,
    FiltroUI
  }
}

export default useFiltro;
