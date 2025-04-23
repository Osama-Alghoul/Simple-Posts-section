import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, {loader as PostsLoader} from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost, {action as newPostAction } from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {loader as PostDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <Posts />, 
        loader: PostsLoader,
        children: [
          {path: "/create-posts", element: <NewPost />, action: newPostAction},
          {path: ":id", element: <PostDetails />, loader: PostDetailsLoader}
        ]
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
