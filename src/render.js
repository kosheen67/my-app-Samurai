import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { addPost, updateNewPostText } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
}

export { rerenderEntireTree };



