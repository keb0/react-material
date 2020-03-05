import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import Footer from './Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        total: 0,
        current: 0,
        list: [],
        flag: 0,
      },
    }
  }

  handleSubmit = async value => {
    if (value.word) {
      console.log('word')
    }
    if (value.size) {
      console.log('size')
    }
    const result = await axios('http://localhost:9000/data.json')
    this.setState({ data: result.data })
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <SearchResult handleSubmit={this.handleSubmit} data={data} />
        <Footer />
      </div>
    )
  }
}
