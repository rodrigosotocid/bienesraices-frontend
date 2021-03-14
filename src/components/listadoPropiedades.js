import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview'
import { ulpropiedades } from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {

  const resultado = usePropiedades();
  const [propiedades] = useState(resultado);
  const [filtradas, guardarFiltradas] = useState([]);

  // Filtrado de propiedades 
  const { categoria, FiltroUI } = useFiltro();
  console.log(categoria);
  console.log(resultado);

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(p => p.categoria.nombre === categoria);
      guardarFiltradas(filtro);
    } else {
      guardarFiltradas(propiedades);
    }
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
      `}>Nuestras Propiedades</h2>

      {FiltroUI()}

      <ul className={ulpropiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview
            key={propiedad.id}
            propiedad={propiedad}
          />
        ))}
      </ul>

    </>
  );
}

export default ListadoPropiedades;