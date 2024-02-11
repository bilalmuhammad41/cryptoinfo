import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography
const {Option} = Select


const News = () => {
  const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: 10})
  console.log(cryptoNews)
  if (isFetching) return 'Loading...'
  return (
    <div>News</div>
  )
}

export default News
