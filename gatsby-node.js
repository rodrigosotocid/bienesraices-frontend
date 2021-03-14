const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          id
          nombre
        }
      }
    }
  `);

  //console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

  // Si no hay resultados
  if (resultado.errors) {
    reporter.panic(`No hubo resultados`, resultado.errors)
  }

  // Si hay resultados generar los archivos estáticos

  const propiedades = resultado.data.allStrapiPropiedades.nodes;

  // crear los templates de propiedades
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/propiedades.js'),
      context: {
        id: propiedad.id
      }
    })
  })

}
