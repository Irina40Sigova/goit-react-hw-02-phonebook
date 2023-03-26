import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import { LoginForm } from '../LoginForm/LoginForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = contacts => {
    this.setState(prevState => {
      contacts.id = nanoid();
      return {
        contacts: [contacts, ...prevState.contacts],
      };
    });
  };

  getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    this.setState({
      filter: name,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title> Phonebook</Title>
        <LoginForm addContact={this.addContact} state={this.state} />
        <Filter getFilter={this.getFilter} />
        <Contacts state={this.state} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}
