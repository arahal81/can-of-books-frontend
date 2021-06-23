import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
import BookFormUpateModal from './BookFormUpateModal';
import MyFavoriteBooks from './MyFavoriteBooks'
class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData: [],
            showNewBookFrom: false,
            showUpdateBookFrom:false,
            name:'',
            description:'',
            status:'',
            id:''
        }

    }


    updateName=(event)=>{
        this.setState({
            name:event.target.value,
        })
    }
    updateDescription=(event)=>{
        this.setState({
            description:event.target.value,
        })
    }
    updateStatus=(event)=>{
        this.setState({
            status:event.target.value,
        })
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
    handleCloseUpate = () => {
        this.setState({ showUpdateBookFrom: !this.state.showUpdateBookFrom });
    }  
    
    handleShowUpate = (item,id) => {
        this.setState({ 
        showUpdateBookFrom: !this.state.showUpdateBookFrom ,
        name:item.name,
        description:item.description,
        status:item.status,
        id:id
        });
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
        axios.post(`${process.env.REACT_APP_APIURL}/books`, paramsObj).then(item =>
            this.setState({
                booksData: item.data,
                showNewBookFrom: false
            })).catch(err => console.log(err))
    }
    updateBook = (event) => {
        event.preventDefault();
        const { user } = this.props.auth0;
        const paramsObj = {
            name: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
            email: user.email
        }
        console.log(paramsObj);
        axios.put(`${process.env.REACT_APP_APIURL}/books/${this.state.id}`, paramsObj).then(item =>
            this.setState({
                booksData: item.data,
                showUpdateBookFrom: false
            })).catch(err => console.log(err))
    }

    deleteBook = (id) => {
        const { user } = this.props.auth0;
        const query = {
            email: user.email
        }
        console.log('app',id, query);
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
                <BookFormUpateModal show={this.state.showUpdateBookFrom} 
                handleCloseUpate={this.handleCloseUpate}name={this.state.name}
                description={this.state.description} status={this.state.status}
                updateBook={this.updateBook} updateStatus={this.updateStatus} 
                updateDescription={this.updateDescription} updateName={this.updateName} />
                <BookFormModal show={this.state.showNewBookFrom} handleClose={this.handleClose} addNewBook={this.addNewBook} />
                <MyFavoriteBooks  handleShowUpate={this.handleShowUpate} handleClose={this.handleClose} booksData={this.state.booksData} deleteBook={this.deleteBook}/>
            </>
        )
    }
}

export default withAuth0(BestBooks);