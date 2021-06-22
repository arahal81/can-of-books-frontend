import React from 'react';
import { Modal, Button, } from 'react-bootstrap';
//import FormAdd from './FormAdd';
class BookFormModal extends React.Component {




    render() {
        return (
            <>
            {console.log( this.props.show)}
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD NEW BOOK</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.props.addNewBook}>
                    <Modal.Body>
                        <div>
                      
                                <div className="mb-3" controlId="formBasicEmail">
                                    <label>Book title</label>
                                    <input type="text" name="title" placeholder="Enter book title" />
                                </div>

                                <div className="mb-3" controlId="formBasicPassword">
                                    <label>Description</label>
                                    <input type="text" name="description" placeholder="Description" />
                                </div>
                                <div className="mb-3" controlId="formBasicCheckbox">
                                    <label>Status</label>
                                    <select name="status" aria-label="Floating label select example">
                                        <option value="">Open this select menu</option>
                                        <option value="Life Changing">Life Changing</option>
                                        <option value="Favorite Five">Favorite Five</option>
                                        <option value="Recommended To Me">Reccomended To Me</option>
                                    </select>
                                </div>
                           
                                
                                
                                 
                       {/* <FormAdd addNewBook={this.props.addNewBook}/> */}
                       </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                        <Button type="submit" variant="primary">Add Book</Button>
                    </Modal.Footer>
                    </form> 
                </Modal>
            </>
        )
    }
}
export default BookFormModal;