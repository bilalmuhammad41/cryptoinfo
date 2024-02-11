import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography
const {Option} = Select


const News = ({simplified}) => {
  const {data, isFetching} = useGetCryptoNewsQuery(simplified? 5 : 20)
  if (isFetching) return 'Loading...'
 
  return (
    <Row gutter={[24, 24]}>
      {data.map((news, i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.title}</Title>
              </div>
              <p>{news.description >100 
                  ? `${news.description.subsctring(0,100)}...`
                  : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Text>{news.date}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
