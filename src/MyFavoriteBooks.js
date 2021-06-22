import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Carousel, Button } from 'react-bootstrap';
import './myFavoriteBooks.css';
class MyFavoriteBooks extends React.Component {
 
  render() {

    return (

      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button onClick={this.props.handleClose} variant="success">Add New Book</Button>
          {this.props.booksData.length !== 0 &&
            <Carousel>
              {this.props.booksData.map((item, idx) => (
                <Carousel.Item key={idx}>
                 
                  <img
                    className="d-block w-100"
                    src={''}
                    alt=' '
                    style={{ height: '30rem' }}
                  />
                  <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#F4F4F4', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <hr/>
                    <h4>{item.status}</h4>
                    <Button onClick={()=>{this.props.deleteBook(idx)}} variant="danger">Delet a Book</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                
              ))}
            </Carousel>
          }
        </Jumbotron>
      </>

    )
  }
}

export default MyFavoriteBooks;
