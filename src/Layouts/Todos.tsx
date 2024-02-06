import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../features/todos/header'

const Todos:FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className='p-3'>
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default Todos