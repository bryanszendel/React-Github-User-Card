import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => {
  return (
    <Card centered={true} raised={true}>
      <Image src={props.avatar} alt="avatar"/>
      <Card.Content textAlign='left'>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in {props.created === null ? '' : props.created.slice(0, 4)}</span>
        </Card.Meta>
        <Card.Description>{props.bio}</Card.Description>
      </Card.Content>
      <Card.Content textAlign='left' extra>
        <a href='localhost:3000'>
          <Icon name='user' />
          {props.followers} Followers
        </a>
      </Card.Content>
    </Card>
  )
}

export default UserCard;