import React from 'react';
import {Link} from 'react-router-dom';
import './Messages.scss';

const Messages = () => {
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  const Message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur autem exercitationem eum mollitia dolorem!`

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/123" className='link'>{Message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;

// import React from 'react';
// import './Messages.scss';

// const Messages = () => {
//   return <div className="messages">Messages</div>;
// };

// export default Messages;
