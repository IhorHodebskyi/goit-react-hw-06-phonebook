import { Div, Label, Input } from './Filter.styled';

import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

const Filter = () => {
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
                    onChange={changeFilter}
                />
            </Label>
        </Div>
    );
};

export default Filter;
