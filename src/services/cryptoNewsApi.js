import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'd5dfe548ccmsha5a9a9d8bd94ba0p1c5a0ajsn2b9d5408ac40',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com'

const prepareHeaders = (url)=> ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
    getCryptoNews: builder.query({
      query: (count) => prepareHeaders(`/news/top/${count}`),
    })
  })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi