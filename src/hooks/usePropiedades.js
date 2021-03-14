import { useStaticQuery, graphql } from 'gatsby'

const usePropiedades = () => {

  const datos = useStaticQuery(graphql`
        query{
          allStrapiPropiedades {
            nodes {
              nombre
              descripcion
              habitaciones
              estacionamiento
              precio
              wc
              id
              categorias {
                nombre
              }
              agentes {
                nombre
                email
                telefono
              }
              imagen {
                sharp: childImageSharp{
                  fluid(maxWidth: 600){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
  `);

  /* 
  con "maxHeight: 400" la imagen rendeiza borrosa
  fluid(maxWidth: 600, maxHeight: 400){
    ...GatsbyImageSharpFluid_withWebp
  }
  */

  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agentes,
    precio: propiedad.precio,
    categoria: propiedad.categoria
  }));

}

export default usePropiedades;