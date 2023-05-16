"use client"

import { useState } from 'react';
import axios from 'axios';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setState('Loading');

    try {
      const response = await axios.post('/api/subscribe', { email });
      console.log(response);
      setState('Success');
      setEmail('');
    } catch (e) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
      setState('Error');
    }
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-black sm:text-3xl dark:text-white">Abonniere unseren Newsletter</h2>
      <p className="mx-auto mb-8 max-w-2xl font-light text-gray-600 md:mb-12 sm:text-xl dark:text-gray-600">Verpasse keine Neuigkeiten zu unserem Roadmap-Fortschritt und spannenden Ankündigungen! Melde dich jetzt mit deiner E-Mail-Adresse an und bleibe über unseren Blog auf dem Laufenden.</p>
      <form onSubmit={subscribe}>
        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <input
            class="block p-3 pl-10 w-full text-s text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="py-3 px-5 w-full text-s font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Eintragen
            </button>
          </div>
        {state === 'Error' && (
          <div className="error-state">{errorMsg}</div>
        )}
        {state === 'Success' && (
          <div className='text-lg font-bold text-black'>Grossartig, du bist jetzt dabei!</div>
        )}
        </div>
      </form>
    </div>
    </div>
  );
}