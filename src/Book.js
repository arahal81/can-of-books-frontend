import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Book extends React.Component {

  render() {
   
    return(
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={this.props.img}
        alt=" "
      />
      <Carousel.Caption>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    )
  }
}

export default Book;

 