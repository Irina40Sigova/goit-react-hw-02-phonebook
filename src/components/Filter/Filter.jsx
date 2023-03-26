import { FilterInput, Title } from './Filter.styled';

export const Filter = ({ getFilter }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <FilterInput type="text" name="filter" onChange={getFilter} />
    </>
  );
};
