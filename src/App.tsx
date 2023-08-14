import React, { useEffect, useState } from 'react';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import classNames from 'classnames';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { UserSelector } from './components/UserSelector';
import { Loader } from './components/Loader/Loader';
import { User } from './types/User';
import { Post } from './types/Post';
import { ErrMessage } from './types/ErrMessage';
import { getPosts, getUsers } from './api';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [errorMess, setErrorMess] = useState<ErrMessage>(ErrMessage.Empty);
  const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (selectedUser) {
      setIsLoadingPosts(true);

      getPosts(selectedUser.id)
        .then(setPosts)
        .catch(() => setErrorMess(ErrMessage.GetPosts))
        .finally(() => setIsLoadingPosts(false));
    }
  }, [selectedUser]);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(() => setErrorMess(ErrMessage.GetUsers));
  }, []);

  return (
    <main className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box is-success">
              <div className="block">
                <UserSelector
                  users={users}
                  selectedUser={selectedUser}
                  onSetSelectedUser={setSelectedUser}
                  onSetSelectedPost={setSelectedPost}
                />
              </div>

              {isLoadingPosts ? (<Loader />) : (
                <div className="block" data-cy="MainContent">
                  {selectedUser === null && (
                    <p data-cy="NoSelectedUser">
                      No user selected
                    </p>
                  )}

                  {errorMess.length > 1 && (
                    <div
                      className="notification is-danger"
                      data-cy="PostsLoadingError"
                    >
                      {errorMess}
                    </div>
                  )}

                  {posts !== null && posts.length < 1 && (
                    <div
                      className="notification is-warning"
                      data-cy="NoPostsYet"
                    >
                      No posts yet
                    </div>
                  )}

                  {posts !== null && posts.length > 0 && (
                    <PostsList
                      posts={posts}
                      selectedPost={selectedPost}
                      onSetSelectedPost={setSelectedPost}
                    />
                  )}
                </div>
              )}

            </div>
          </div>

          <div
            data-cy="Sidebar"
            className={classNames(
              'tile',
              'is-parent',
              'is-8-desktop',
              'Sidebar',
              { 'Sidebar--open': selectedPost },
            )}
          >
            {selectedPost !== null && (
              <div className="tile is-child box is-success ">
                <PostDetails
                  selectedPost={selectedPost}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
