import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Book from './Book'
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      booksData:''
    }

  }
  
  componentDidMount = () => {
  let {user}=this.props.auth0;
  let apiUrl = `${process.env.REACT_APP_APIURL}/book?email=${user.email}`;
      axios.get(apiUrl).then((item) => {
        this.setState={
            booksData:item.data
        }
        console.log('done');
      }).catch(console.log('no data'))
    
  }
  render() {
   
    return(
      
      <>

          <Carousel>
           { this.state.booksData.map(item=>(
            
            <Book img={item.img}description={item.description}name={item.name}/>
            
            ))}
          </Carousel>
      </>
      
    )
  }
}

export default withAuth0(MyFavoriteBooks);
