import React from 'react';
import Container from './Container';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { Button } from 'primereact/button';
import { decrement, increment } from '../feature/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export default function Counter() {
  // Retrive count value from central store
  // const { value } = useSelector((state: RootState) => state.counter);
  const { value } = useAppSelector((state) => state.counter);

  // Dispatch action and update the value of the central store
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <section className='mt-3'>
        <h1>Counter Value Receive from Redux Store via redux-toolkit</h1>
        <p className='font-medium text-2xl text-teal-500'>
          Counter Value : {value}
        </p>
        <div className='card flex gap-4 mt-2'>
          <Button label='Increment' onClick={() => dispatch(increment())} />
          <Button
            label='Decrement'
            severity='help'
            onClick={() => dispatch(decrement())}
          />
        </div>
      </section>
    </Container>
  );
}
