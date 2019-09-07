import React from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = React.useState();
  const [theater, setTheater] = React.useState('CINEMARK');
  const [mail, setMail] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const onSignUp = () => {
    setLoading(true);
    console.log({ movie, theater, mail });
  };

  return (
    <div className="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 bg-gray-200 flex justify-center">
      <div className="w-full max-w-xs">
        <h1>Notificación de preventas para próximos estrenos de DC</h1>
        <form
          method="post"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="movie"
            >
              Película
            </label>
            <select
              name="movie"
              id="movie"
              // value={movie}
              // onChange={e => setMovie(e.target.value)}
            >
              <option></option>
              <option value="JOKER">JOKER</option>
              <option value="BIRDS OF PREY">BIRDS OF PREY</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="theater"
            >
              Sala de Cine
            </label>
            <select
              name="theater"
              id="theater"
              // value={theater}
              // onChange={e => setTheater(e.target.value)}
            >
              <option value="CINEMARK">CINEMARK</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mail"
            >
              Email
            </label>
            <input
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              // onChange={e => setMail(e.target.value)}
              placeholder="example@email.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              // onClick={onSignUp}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2019 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
