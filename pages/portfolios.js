import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

import BaseLayout from '../components/Layouts/BaseLayout'

class Portfolios extends Component {
  static getInitialProps = async () => {
    let posts = []
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = res.data
    } catch (e) {
      console.log(e)
    }
    return { posts: posts.slice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map((post) => (
      <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
        <a>
          <li key={post.id}>{post.title}</li>
        </a>
      </Link>
    ))
  }

  render() {
    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <ul>{this.renderPosts(this.props.posts)}</ul>
      </BaseLayout>
    )
  }
}

export default Portfolios
