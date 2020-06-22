import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../UI/Input';
import DelayCountryActions from '../../store/delayCountry/actions';
import { AppState } from '../../store/rootReducer';
import { DelayCountryProps, DelayCountryPropsEvent }  from '../../types';

import { Wrapper, Title, Flag, Name, Img } from './styled';

const DelayCountry: React.FC = () => {
  const [timer, setTimer] = useState(false)

  const dispatch = useDispatch();
  const { search, country, error } = useSelector((state: AppState) => state.delayCountry);
 
  useEffect(() => {
    if (search !== '' && timer) {
      dispatch(DelayCountryActions.getDelayCountry({ search }))
      setTimeout(() => setTimer(false), 2000)
    }
  }, [dispatch, search, timer]);
  
  const handleChangeInput = (event: DelayCountryPropsEvent) => {
    const { name, value } = event.target;
    dispatch(DelayCountryActions.changeInput({name, value }))
    setTimeout(() => setTimer(true),2000)
  };

  return (
    <Wrapper>
      <Title>DelayCountry</Title>
      {error}
      <Input  
        type="text" 
        name="search"
        value={search}
        onChange={e => handleChangeInput(e)}
      />
      {country && country.map((el: DelayCountryProps) => {
        return(
          <Flag key={el.id}>
            <Name>{el.name}</Name>
            <Img alt='img' src={el.flag} />
          </Flag>
        )
      })}
    </Wrapper>
  )
}

export default DelayCountry;