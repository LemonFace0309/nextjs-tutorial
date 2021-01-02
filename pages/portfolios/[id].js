import React, { Component } from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'

import BaseLayout from '../../components/Layouts/BaseLayout'

class Portfolio extends Component {
  static getInitialProps = async ({query}) => {
    let post = {}
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
      post = res.data
    } catch (e) {
      console.log(e)
    }
    return { portfolio: post }
  }

  render() {
    const { portfolio } = this.props
    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <h2>{portfolio.title}</h2>
        <p>Body: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio)
