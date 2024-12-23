import React, { useState } from 'react';
import axios from 'axios';
import loader from '../assets/loader.svg';

const rapidApiKey = import.meta.env.VITE_RAPIDAPI_KEY
;

function ArticleSummarizer() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSummary('');

    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url,
        lang: 'en',
        engine: '2',
      },
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSummary(response.data.summary);
    } catch (err) {
      setError('Failed to fetch the summary. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Article Summarizer
        </h2>
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Article URL:
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="mt-6 text-gray-500 text-center">
          <img src={loader} alt="" />
        </div>
      )}

      {/* Summary Display */}
      {summary && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h3 className="text-lg font-bold text-gray-800">Summary:</h3>
          <p className="text-gray-700 mt-2">{summary}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg shadow-md w-full max-w-lg">
          {error}
        </div>
      )}
    </div>
  );
}

export default ArticleSummarizer;
