import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      avatar: '',
      name: '',
      bio: '',
      created: null,
      followers: []
    }
  }

  componentDidMount() {
    this.fetchUser()
    this.fetchFollowers()
  }

  fetchUser = () => {
    fetch('https://api.github.com/users/bryanszendel')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({ 
          name: response.name, 
          bio: response.bio,
          avatar: response.avatar_url,
          created: response.created_at,
        })
        console.log('User Data', response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollowers = () => {
    fetch('https://api.github.com/users/bryanszendel/followers')
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        this.setState({
          followers: response
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <Grid centered={true} columns={2}>
        <Grid.Row>
          <Grid.Column>
            <UserCard 
              name={this.state.name} 
              bio={this.state.bio}
              avatar={this.state.avatar}
              created={this.state.created}
            />
          </Grid.Column>
          <Grid.Column>
            <Followers followers={this.state.followers}/>
          </Grid.Column>          
        </Grid.Row>
          
          
      </Grid>
    );
  }
}

export default App;
