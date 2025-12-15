/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import userServer from './api/userServer';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from './store/feedSlice';
import Card from './Card';

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);
  const getFeed = () => {
    userServer
      .getFeeds(1, 10)
      .then((result) => {
        dispatch(addFeed(result));
      })
      .catch((err) => {
        console.error('ERROR :', err);
      });
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed?.result?.length) {
    return <>No Data!!!</>;
  }

  return (
    <div className='overflow-auto'>
      {feed.result.map((item) => {
        return <Card key={item._id} {...item} />;
      })}
    </div>
  );
}

export default Feed;
