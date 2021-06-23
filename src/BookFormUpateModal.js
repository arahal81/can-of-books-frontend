import React from 'react';
import { Modal, Button, } from 'react-bootstrap';
//import FormAdd from './FormAdd';
class BookFormUpateModal extends React.Component {




    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleCloseUpate}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD NEW BOOK</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.props.updateBook}>
                    <Modal.Body>
                        <div>
                      
                                <div className="mb-3" controlId="formBasicEmail">
                                    <label>Book title</label>
                                    <input type="text" onChange={(event)=>this.props.updateName(event)} value={this.props.name} name="title" placeholder="Enter book title" />
                                </div>

                                <div className="mb-3" controlId="formBasicPassword">
                                    <label>Description</label>
                                    <input type="text" onChange={(event)=>this.props.updateDescription(event)} value={this.props.description} name="description" placeholder="Description" />
                                </div>
                                <div className="mb-3" controlId="formBasicCheckbox">
                                    <label>Status</label>
                                    <select name="status" onChange={(event)=>this.props.updateStatus(event)} value={this.props.status} aria-label="Floating label select example">
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
                        <Button variant="secondary" onClick={this.props.handleCloseUpate}>Close</Button>
                        <Button type="submit" variant="primary">Update</Button>
                    </Modal.Footer>
                    </form> 
                </Modal>
            </>
        )
    }
}
export default BookFormUpateModal;