/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import userServer from './api/userServer';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from './store/slice/feedSlice';
import Card from './Card';
import useToast from './utils/useToast';

function Feed() {
  const dispatch = useDispatch();
  const showToast = useToast();
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

  const handleConnection = (_id, status) => {
    userServer
      .connection(_id, status)
      .then(() => {
        if (status === 'ignored') {
          showToast('Ignored...!!', 'error');
        } else {
          showToast('Interested...!!', 'success');
        }

        const updatedFeedList = feed.result.filter((item) => item._id !== _id);
        const feedList = {
          result: updatedFeedList,
          count: feed.count - 1,
        };
        dispatch(addFeed(feedList));
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };

  if (!feed?.result?.length) {
    return <>No Data!!!</>;
  }

  return (
    <div className='overflow-auto'>
      {feed.result.map((item) => {
        return (
          <Card key={item._id} {...item} handleConnection={handleConnection} />
        );
      })}
    </div>
  );
}

export default Feed;
