import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd5dfe548ccmsha5a9a9d8bd94ba0p1c5a0ajsn2b9d5408ac40',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const prepareHeaders = (url)=> ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => prepareHeaders(`/news/search/?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi