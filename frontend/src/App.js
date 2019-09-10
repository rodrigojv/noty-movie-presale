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
    <div className="main-section bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 bg-gray-200 flex justify-center">
      <div className="w-full max-w-4xl m-8">
        <form method="post" className="px-8 pt-10 pb-10 mb-4">
          <h1 className="title mt-8 text-gray-300 text-3xl">
            Notificación de preventas para próximos estrenos de DC
          </h1>
          <h2 className="title mt-8 text-gray-300 text-xl">
            Porque somos fanáticos de lo que se viene y no hay forma de saber
            anticipidadmente en las apps de cines
          </h2>
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-4 mt-8">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="movie"
            >
              Película
            </label>
            <select
              name="movie"
              id="movie"
              className="w-full  py-2 px-3"
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
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="theater"
            >
              Sala de Cine
            </label>
            <select
              name="theater"
              id="theater"
              className="w-full  py-2 px-3"
              // value={theater}
              // onChange={e => setTheater(e.target.value)}
            >
              <option value="CINEMARK">CINEMARK</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
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
              className="bg-blue-500 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center px-8 mt-8 mb-8 text-gray-500 text-xs">
          &copy;2019 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
