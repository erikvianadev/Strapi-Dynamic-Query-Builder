const qs = require('qs')
const { endpointOldPostsPrefeituraRP } = require('./endpoints')
const { termsFilter } = require('./terms')
const { campsFilter } = require('./camps')

const filterTerms = (terms, camps) => {
  const filters = {
    $or: terms.map(term => {
      const orFilter = {}
      camps.forEach(camp => {
        orFilter[camp] = {
          $containsi: term,
        }
      })
      return orFilter
    })
  }
  return filters
}

const getOldPostsPrefeituraRP = async () => {
  const query = qs.stringify({
    filters: filterTerms(termsFilter, campsFilter),
    pagination: {
      page: 1,
      pageSize: 100,
    },
  }, {
    encodeValuesOnly: true,
  })

  console.log('Query string gerada:', query)

  const response = await fetch(`${endpointOldPostsPrefeituraRP.STRAPI_URL_BASE}/${endpointOldPostsPrefeituraRP.STRAPI_ENDPOINT}?${query}`)
  const data = await response.json()
  return data
}

getOldPostsPrefeituraRP()
  .then(data => {
    console.log('Dados filtrados:', data)
  })
  .catch(error => {
    console.error('Erro ao buscar os dados:', error)
  })


