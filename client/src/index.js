import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EditBook from './components/EditBook';
import BaseLayout from './components/BaseLayout';
import BookDetail from './components/BookDetail';
import Register from './components/Register';
import Login from './components/Login';
import AddBook from './components/AddBook';
import MyBooks from './components/MyBooks';
import CartList from './components/CartList';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/edit-book/:id' element={<EditBook />} />
          <Route path='/book/:id' element={<BookDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/my-books' element={<MyBooks />} />
          <Route path='/cart' element={<CartList />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
