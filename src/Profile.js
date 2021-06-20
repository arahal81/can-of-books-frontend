import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';

class Profile extends Component {
    render() {
        const { isAuthenticated,user } = this.props.auth0;
        return (

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            <>
                {isAuthenticated&&

                        <>
                            
                                <Card style={{width: '15.4rem' ,height:'25rem',borderColor:'black ',padding:'0.2rem'}}>
                                    <Card.Img src={user.picture} alt=''  style={{ width: '15rem' ,height:'15rem'}} />
                                    <Card.Body>
                                        <Card.Title>Name: {user.name}</Card.Title>
                                        <Card.Text>Email: {user.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                            
                        </>
                    
              }
            </>)


    }}

    export default withAuth0(Profile);