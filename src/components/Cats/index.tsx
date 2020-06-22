import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Spinner from '../UI/Spinner';
import CatsActions from '../../store/cats/actions';
import { AppState } from '../../store/rootReducer';
import { CatsProps } from '../../types';

import { Span, Name, Spin } from './styled';

const Cats: React.FC = () => {
  const dispatch = useDispatch();
  const { allCats, pageSize, totalCount, isLoading } = useSelector((state: AppState) => state.cats);
  const [currentPage, setCurrentPage] = useState(1);

    let page = [];
    let pageCount = Math.ceil(totalCount/pageSize);
    for (let i = 1; i <= pageCount; i++ ){
      page.push(i);
    }

    useEffect(() => {
      dispatch(CatsActions.getAllCats({ pageSize }));
      dispatch(CatsActions.getAllCatsLength());
    }, [dispatch, pageSize])

    useEffect(() => {
      dispatch(CatsActions.currentPage({ pageSize, currentPage }))
    }, [dispatch, pageSize, currentPage])
 
  const catsName = allCats && allCats.map((el: CatsProps) => {
      return <Name key={el.id}>{el.name}</Name>
    });

    if(isLoading) {
      return (
        <Spin>
          <Spinner />
        </Spin>
      )
    }

  return (
    <>
      {catsName}
      {page.map(p => {
        return  <Span primary={currentPage === p} onClick={() => setCurrentPage(p)}>{p}</Span>
        })}
    </>
  )
}

export default Cats;