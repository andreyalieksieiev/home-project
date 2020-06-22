import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import CountryActions from '../../store/country/actions';
import { AppState } from '../../store/rootReducer';
import { CountryProps, CountryPropsEvent } from '../../types';

import { Wrapper, Title, Flag, Name, Img } from './styled';

const Country: React.FC = () => {
  const dispatch = useDispatch();
  const { country, error, search } = useSelector((state: AppState) => state.country);
  const [filterCountry, setFilterCountry] = useState<CountryProps[]>([])

  useEffect(() => {
    dispatch(CountryActions.getCountry())
  }, [dispatch])

  const getCountry = () => {
    setFilterCountry(country.filter((count: { name: string; }) => {
      return count.name.toLowerCase().includes(search.toLowerCase());
    }));
  };

  const handleChangeInput = (event: CountryPropsEvent ) => {
    const { name, value } = event.target;
    dispatch(CountryActions.changeInput({name, value }))
  };

  return (
    <Wrapper>
      <Title>Search country</Title>
      {error}
      <Input 
        type="text" 
        name="search"
        value={search}
        placeholder="Search your country"
        onChange={e => handleChangeInput(e)}
      />
      <Button onClick={() => getCountry()}>Get country</Button>
      {filterCountry && filterCountry.map(el => {
        return (
        <Flag key={el.id}>
          <Name>{el.name}</Name>
          <Img src={el.flag} alt="test" />
        </Flag>
        )
      })}
    </Wrapper>
  );
};

export default Country;