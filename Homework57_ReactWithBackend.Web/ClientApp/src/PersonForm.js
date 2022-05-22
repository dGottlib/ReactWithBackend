import React from 'react';

export default function PersonForm({person, onTextChange, isEditing, onAddClick, onUpdateClick, onCancelClick}) {
    const {firstName, lastName, age} = person;
    
    return <div className="row jumbotron">      
        <div className='col-md-3'>
            <input value={firstName}  onChange={onTextChange} name='firstName' type='text' className='form-control' placeholder='First Name' />
        </div>
        <div className="col-md-3">
            <input  value={lastName}  onChange={onTextChange} name='lastName' type='text' className="form-control" placeholder="Last Name"/>
        </div>
        <div className="col-md-3">
            <input  value={age}  onChange={onTextChange} name='age' type='text' className="form-control" placeholder="Age"/>
        </div>  

        <div className='col-md-3'>
            {isEditing ?                
            <div>
                <button onClick={onUpdateClick} className='btn btn-success btn-block'>Update</button>
                <button onClick={onCancelClick} className='btn btn-info btn-block'>Cancel</button>
            </div>
            :
                <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
        
            }
        </div>
    </div>
}
