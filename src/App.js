import React, { Component } from 'react'
import Table from './Table'
import Title from './Title'
import Form from './Form'
import Api from './Api'

class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  state = {
    characters : [{
      name: 'Helena',
      job:'Point Guard'
    }]
  }
  render() {
    // const characters = [
    //   {
    //     name: 'Charlie',
    //     job: 'Janitor',
    //   },
    //   {
    //     name: 'Mac',
    //     job: 'Bouncer',
    //   },
    //   {
    //     name: 'Dee',
    //     job: 'Aspring actress',
    //   },
    //   {
    //     name: 'Dennis',
    //     job: 'Bartender',
    //   },
    //   {
    //     name: 'Bergkamp',
    //     job: 'Director',
    //   },
    // ]
    const { characters } = this.state
    return (
      <div className="container">
        <Title />
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form />
        <Api />
      </div>
    )
  }
}

export default App