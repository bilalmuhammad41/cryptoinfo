import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd5dfe548ccmsha5a9a9d8bd94ba0p1c5a0ajsn2b9d5408ac40',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const prepareHeaders = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
    getCryptos: builder.query({
      query: (count) => prepareHeaders(`/coins?limit=${count}`)
    })
  })
})

export const {useGetCryptosQuery} = cryptoApi