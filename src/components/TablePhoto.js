import React, { Component } from 'react'
import axios from 'axios'

class TablePhoto extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos: [], 
         error:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({photos: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'Error retrieving data'})
            })
    }

    render() {
    const{photos, deleteRow, errorMessage} = this.state
    return (
      <div>
        <h1>List of albums</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photos) => (
              <tr>
                <td>{photos.id}</td>
                <td>{photos.title}</td>
                <td><img src={photos.thumbnailUrl}/></td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
    )
  }
}

export default TablePhoto