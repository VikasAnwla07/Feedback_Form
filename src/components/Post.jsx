import { Navigate } from 'react-router-dom';
function Post() {
  const onClick = () => {
    console.log('Hello');
  };
  const status = 200;
  if (status === 404) {
    return <Navigate to='/notfound' />;
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click </button>
    </div>
  );
}
export default Post;
