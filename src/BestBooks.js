import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
import MyFavoriteBooks from './MyFavoriteBooks'
class BestBooks extends React.Component {
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
            console.log(newBookList)
            this.setState({
                booksData: newBookList.data
            })
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <>
                
                <BookFormModal show={this.state.showNewBookFrom} handleClose={this.handleClose} addNewBook={this.addNewBook} />
                <MyFavoriteBooks handleClose={this.handleClose} booksData={this.state.booksData} deleteBook={this.deleteBook}/>
            </>
        )
    }
}

export default withAuth0(BestBooks);