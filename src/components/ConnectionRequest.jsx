import React, { useEffect } from 'react';
import userServer from './api/userServer';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { removeRequest, setRequests } from './store/slice/connectionSlice';
import NoDataCard from './NoDataCard';

function ConnectionRequest() {
  const dispatch = useDispatch();
  const connectionRequest = useSelector(
    (state) => state.connection.requests || [],
  );

  useEffect(() => {
    userServer
      .requestReceived()
      .then((res) => {
        dispatch(setRequests(res.data));
      })
      .catch((error) => console.log('ERROR: ', error));
  }, [dispatch]);

  const handleConnection = (requestId, status) => {
    userServer
      .requestReview(requestId, status)
      .then(() => {
        dispatch(removeRequest(requestId));
      })
      .catch((error) => console.log('ERROR: ', error));
  };
  if(!connectionRequest?.length) return <NoDataCard text='Connection Request Not Found !!' />

  return (
    <div className='overflow-auto'>
      {connectionRequest.map((item) => {
        return (
          <Card
            key={item._id}
            screen='connectionRequest'
            {...item.fromUserId}
            fullName={`${item.fromUserId?.firstName} ${item.fromUserId?.lastName }`}
            handleConnection={(_id, status) =>
              handleConnection(item._id, status)
            }
          />
        );
      })}
    </div>
  );
}

export default ConnectionRequest;
