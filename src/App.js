import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }
  }

  handleSubmit = async keyword => {
    const result = await axios('http://localhost:9000/data.json')
    this.setState({ data: result.data })
  }

  render() {
    const { data } = this.state
    console.log(data)
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <SearchResult data={data} />
      </div>
    )
  }
}
