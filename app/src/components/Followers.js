import React from 'react'
import { List, Image } from 'semantic-ui-react'

const Followers = props => {
  return (
    <List verticalAlign='middle'>
      {props.followers.map(follower => {
        return (
          <List.Item key={follower.id}>
            <Image avatar src={follower.avatar_url} />
            <List.Content>
              <List.Header as='h4'>{follower.login}</List.Header>
            </List.Content>
          </List.Item>
        )
      })}
    </List>
  )
}

export default Followers;