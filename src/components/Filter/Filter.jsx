import { Div, Label, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </Label>
    </Div>
  );
};

export default Filter;
