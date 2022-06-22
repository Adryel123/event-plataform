import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opvdc10shp01xk6sc3bl2d/master',
  cache: new InMemoryCache()
})