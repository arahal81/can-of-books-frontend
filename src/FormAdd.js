import React from 'react';
//import { Button } from 'react-bootstrap';

class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description: false
        }
    
      }

    render() {
        return (
            <>
            <form onSubmit={this.props.addNewBook}>
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
                           
                                
                                
                                </form>  
                   
            </>
        )
    }
}
export default FormAdd;