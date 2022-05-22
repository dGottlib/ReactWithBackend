import React from 'react';
import PersonForm from './PersonForm';
import axios from 'axios';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

state =  {
    people: [],
    person: {
        firstName: '',
        lastName: '',
        age: ''
}
}

componentDidMount() {
  axios.get('/api/people/getall').then(p => {
    this.setState({people: p.data});
  });
}

loadPeople = () => {  
  axios.get('/api/people/getall').then(p => {
    this.setState({
      people: p.data,
      person: {
        firstName: '',
        lastName: '',
        age: ''
      },
      isEditing: false
    });
  });
}

onTextChange = e => {
 const copy = {...this.state.person};
 copy[e.target.name] = e.target.value;
 this.setState ({person: copy});
}

onAddClick = () => {
  axios.post('/api/people/add', this.state.person).then(this.loadPeople);
}

onEditCLick = person => {  
  this.setState({person, isEditing: true});
}

onUpdateClick = person => {
 axios.post('/api/people/update', this.state.person).then(() => {
   this.loadPeople();
   this.onCancelClick();
 });
}

onCancelClick = () => {
  this.setState({isEditing: false, person: {firstName: '', lastName: '', age: ''}});
}

onDeleteClick = id => {
  axios.post('/api/people/delete' , {id}).then(this.loadPeople);
}

render() {
 const {people, person, isEditing} = this.state;
    
    return (
     <div className='container mt-5'>
        <PersonForm 
          person={person}
          onTextChange={this.onTextChange}
          isEditing={isEditing}
          onAddClick={this.onAddClick}
          onUpdateClick={this.onUpdateClick}
          onCancelClick={this.onCancelClick}
        /> 
        
       <table className='table table-hover table-striped table-bordered mt-3'>
          <thead className='table-secondary'>         
              <tr>
                  <td></td>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Age</td>
                  <td>Edit/Delete</td>
              </tr>
          </thead>
          <tbody>
            {
              people.map(p => <PersonRow 
                person={p}
                key={p.id}                
                onEditClick={() => this.onEditCLick(p)}
                onDeleteClick={() => this.onDeleteClick(p.id)}               
              />)
            } 
          </tbody>
       </table>     
         
     </div>
    )
}
}

export default PeopleTable;