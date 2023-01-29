import React from 'react';
import { TodoList } from './components/TodoList';
import { store } from './store/store';



function App() {
  return (
    <div className='center'>
      <TodoList todos={store} />
    </div>
  );
}

export default App;
