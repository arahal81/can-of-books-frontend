import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
//import Book from './Book'
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
    }

  }

  componentDidMount() {
    this.gitbooks();
  }
  gitbooks = async () => {
    let { user } = this.props.auth0;
    let apiUrl = `${process.env.REACT_APP_APIURL}/book?email=${user.email}`;
    try {
      let arraybooks = await axios.get(apiUrl);
      this.setState ({
        booksData: arraybooks.data
      })
    }
    catch (err) {
      console.log(err)
    }

  }



  render() {

    return (

      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          {console.log(this.state.booksData)}
          {this.state.booksData.length!==0&&
          <Carousel>
            {this.state.booksData.map((item,idx) => (
               <Carousel.Item key={idx}>
               <img
                 className="d-block w-100"
                 src={item.img}
                 alt=' '
                 style={{ height:'50rem'}}
               />
               <Carousel.Caption style={{ backgroundColor:'rgba(0, 0, 0, 0.5)', color:'#F4F4F4',fontSize:'1.5rem',fontWeight:'bold'}}>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
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

export default withAuth0(MyFavoriteBooks);
