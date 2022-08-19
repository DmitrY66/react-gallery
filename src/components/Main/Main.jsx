import { Route, Routes } from 'react-router-dom';
import { List } from '../List/List';
import { NotFound } from '../NotFound/NotFound';
import { Photopost } from '../Photopost/Photopost';
import style from './Main.module.css';

export const Main = () => {
  return (
    <main className={style.main}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<List />} />
        <Route path='/auth' element={<List />} />
        <Route path='/post/:id' element={<Photopost />} />

        {/* <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route> */}

      </Routes>
    </main>
  );
};
