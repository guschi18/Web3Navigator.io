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
        <div className="mx-auto max-w-screen-xs sm:text-center">
      <div className="mb-4 text-xl tracking-tight font-extrabold text-black sm:text-3xl">Subscribe to our newsletter</div>
      <div className="mx-auto mb-8 max-w-2xl font-light text-gray-600 md:mb-12 sm:text-xl dark:text-gray-600">Don't miss any news and exciting announcements! Sign up now with your email address and stay updated through our blog.</div>
      <form onSubmit={subscribe}>
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <input
            className="block p-3 pl-10 w-full text-s text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="py-3 px-5 w-full text-s font-medium text-center text-white rounded-lg border cursor-pointer bg-gradient-to-br from-black to-amber-900 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </div>
        {state === 'Error' && (
          <div className="error-state">You are on the list!</div>
        )}
        {state === 'Success' && (
          <div className='text-lg font-bold text-black'>Great, you're in now!</div>
        )}
        </div>
      </form>
    </div>
    </div>
  );
}