import React, { Component } from 'react'
const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>
    )
}

const TableBody = props => {
    
    const rows = props.dataPosts.map((row,index)=>{
        return (
        <tr key={index}>
            <td>{row.title}</td>
            <td>{row.body}</td>
            <td><button onClick={()=>props.removePosts(index)}>Remove</button></td>
        </tr>
        )
    })
    return (
        
    <tbody>{rows}</tbody>
    )
}

class Api extends Component {
  state = {
    data: [],
  }

  
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  removePosts = index => {
    const { data } = this.state
  
    this.setState({
      characters: data.filter((posts,i) => {
        return i !== index
      }),
    })
  }

  

  render() {
    const { data } = this.state

   
    

    return(
        <table>
             <TableHeader />
             <TableBody dataPosts={data} removePosts={this.removePosts}/>
        </table>
    )
  }
}

export default Api