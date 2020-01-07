import React, { Component } from 'react'
import Table from './Table'
import Title from './Title'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Bergkamp',
        job: 'Director',
      },
    ]
    return (
      <div className="container">
        <Title />
        <Table characterData={characters}/>
      </div>
    )
  }
}

export default App