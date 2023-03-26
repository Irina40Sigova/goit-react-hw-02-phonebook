import { Box, Title, Div } from './Contacts.styled';

export const Contacts = ({ state, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <Box>
        {state.contacts.map(e => {
          if (!e.name.toLowerCase().includes(state.filter)) {
            return null;
          }

          return (
            <Div key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => {
                  deleteContact(e.id);
                }}
              >
                Delete
              </button>
            </Div>
          );
        })}
      </Box>
    </>
  );
};
