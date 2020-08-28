import React from 'react';

const Message = ({ msg }) => {

  return (
    <div className='alert alert-warning alert-dismissible fade show' role='alert'>
      <strong className="mr-2">
        ¡Error!
       </strong>
      {msg}
    </div>
  );

};

export default Message;
