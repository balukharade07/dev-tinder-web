import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userServer from './api/userServer';
import { setConnections } from './store/slice/connectionSlice';
import Card from './Card';
import NoDataCard from './NoDataCard';

function Connection() {
  const dispatch = useDispatch();
  const connection = useSelector((state) => state.connection?.connections);

  useEffect(() => {
    userServer
      .getConnection()
      .then((res) => {
        dispatch(setConnections(res.data));
      })
      .catch((error) => console.error('ERROR :', error));
  }, [dispatch]);

  if(!connection?.length) return <NoDataCard text='Connection Not Found !!' />

  return  <div className='overflow-auto'>
      {connection.map((item) => {
        return (
          <Card
            key={item._id}
            screen='connection'
            isEdit={true}
            {...item}
            fullName={`${item?.firstName} ${item?.lastName }`}
            chat={true}
          />
        );
      })}
    </div>;
}

export default Connection;
