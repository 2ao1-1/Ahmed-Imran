import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>
        <span>
          {error.status} {error.statusText}
        </span>
        <br />
        Something went wrong 😢
      </h1>
      <p>{error.data || error.message}</p>

      <button to="-1">&larr; Go back</button>
    </div>
  );
}

export default Error;
