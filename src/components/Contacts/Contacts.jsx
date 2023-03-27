import PropTypes from 'prop-types';

import { Box, Title, Div } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <Box>
        {contacts.map(e => (
          <Div key={e.id}>
            <p>
              {e.name}: {e.number}
            </p>
            <button type="button" onClick={() => deleteContact(e.id)}>
              Delete
            </button>
          </Div>
        ))}
      </Box>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
