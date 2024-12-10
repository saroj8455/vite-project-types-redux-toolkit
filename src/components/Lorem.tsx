import React, { useEffect } from 'react';
import Container from './Container';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchLoremData } from '../feature/loremSlice';

export default function Lorem() {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.lorem);

  useEffect(() => {
    // make inital fetch call
    dispatch(fetchLoremData());
  }, [dispatch]);

  if (loading)
    return (
      <div className='text-center mt-4 font-medium text-2xl text-orange-600'>
        Loading.....Lorem
      </div>
    );
  if (error)
    return (
      <div className='text-center mt-4 font-medium text-2xl text-orange-600'>
        Error : {error}
      </div>
    );

  return (
    <Container>
      <section>
        <h1 className='mt-2'>Lorem API</h1>
        <span className='block text-400'>
          https://baconipsum.com/api/?type=meat-and-filler
        </span>
        {data?.map((text, index) => (
          <article key={index}>{text}</article>
        ))}
        <Button label='Get started with lorem API' />
      </section>
    </Container>
  );
}
