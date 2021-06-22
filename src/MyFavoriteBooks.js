import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Carousel, Button } from 'react-bootstrap';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showNewBookFrom: false
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
      this.setState({
        booksData: arraybooks.data
      })
    }
    catch (err) {
      console.log(err)
    }

  }
  handleClose = () => {
    this.setState({ showNewBookFrom: !this.state.showNewBookFrom });
  }


  addNewBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const paramsObj = {
      name: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: user.email
    }
    console.log(paramsObj);
    axios.post(`${process.env.REACT_APP_APIURL}/books`, paramsObj).then(item =>
      this.setState({
        booksData: item.data,
        showNewBookFrom: false
      })).catch(err => console.log(err))
  }

  deleteBook = (id) => {
    console.log(id);
    const { user } = this.props.auth0;
    const query = {
      email: user.email
    }
    console.log('app', query);
    axios.delete(`${process.env.REACT_APP_APIURL}/books/${id}`, { params: query }).then(newBookList => {
      this.setState({
        booksData: newBookList.data
      })
    }).catch(err => console.log(err))
  }
  render() {

    return (

      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>

          <Button onClick={this.handleClose} variant="success">Add New Book</Button>

          <BookFormModal show={this.state.showNewBookFrom} handleClose={this.handleClose} addNewBook={this.addNewBook} />


          {this.state.booksData.length !== 0 &&
            <Carousel>
              {console.log(this.state.booksData)}
              {this.state.booksData.map((item, idx) => (
                <Carousel.Item key={idx}>
                 
                  <img
                    className="d-block w-100"
                    src={'https://placehold.it/600X800'}
                    alt=' '
                    style={{ height: '50rem' }}
                  />
                  <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#F4F4F4', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <hr/>
                    <h4>{item.status}</h4>
                    <Button onClick={()=>{this.deleteBook(idx)}} variant="danger">Delet a Book</Button>
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
