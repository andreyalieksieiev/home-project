import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { Wrapper, Title, Flag, Name, Img } from './styled';
import CountryActions from '../../store/country/actions';

const Country = () => {
  const dispatch = useDispatch();
  const { country, error, search } = useSelector((state) => state.country);
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    dispatch(CountryActions.getCountry())
  }, [dispatch])

  const getCountry = () => {
    setFilterCountry(country.filter(count => {
      return count.name.toLowerCase().includes(search.toLowerCase());
    }));
  };

  const handleChangeInput = (event) => {
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