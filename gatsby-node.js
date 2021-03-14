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

  if (resultado.errors) {
    reporter.panic(`No hubo resultados`, resultado.errors)
  }
}
