import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bio: '',
    }
  }

  componentDidMount() {
    this.fetchUser()
    console.log('State Data', this.state.user)
  }

  fetchUser = () => {
    fetch('https://api.github.com/users/bryanszendel')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({ name: response.name, bio: response.bio })
        console.log('User Data', response)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <div className="App">
        <UserCard name={this.state.name} bio={this.state.bio}/>
      </div>
    );
  }
}

export default App;
