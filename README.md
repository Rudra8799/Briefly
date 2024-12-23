# Briefly

**Briefly** is a free and powerful article summarizer that simplifies your reading experience by transforming lengthy articles into clear, concise summaries. Whether you’re catching up on the news, conducting research, or studying, Briefly helps you focus on the essentials and save time.

## Features

- **Effortless Summarization**: Extracts key points from lengthy articles.
- **Modern User Interface**: Built with Tailwind CSS for a sleek and responsive design.
- **Fast Performance**: Utilizes Vite for a lightning-fast development experience.
- **API Integration**: Fetches summaries using RapidAPI’s Article Summarizer API.

## Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **HTTP Requests**: Axios
- **API**: RapidAPI’s Article Summarizer

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rudra8799/Briefly.git
   cd briefly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter the URL of the article you want to summarize into the input field.
2. Click the "Summarize" button to fetch the article summary.
3. The summary will be displayed below the form.

## Folder Structure

```
briefly/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   ├── Hero.jsx     # Hero section with navigation
│   │   ├── Form.jsx     # Input form for URLs
│   └── App.jsx          # Main application component
├── public/              # Static public files
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## API Configuration

To use the RapidAPI Article Summarizer:

1. Sign up on [RapidAPI](https://rapidapi.com/).
2. Subscribe to the **Article Summarizer API**.
3. Obtain your API key and add it to the project:
   - Create a `.env` file in the project root.
   - Add your API key:
     ```env
     VITE_RAPIDAPI_KEY=your_api_key_here
     ```

## Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting platform (e.g., Vercel, Netlify).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [RapidAPI](https://rapidapi.com/) for providing the Article Summarizer API.
- [Vite](https://vitejs.dev/) for the fast build tool.
- [Tailwind CSS](https://tailwindcss.com/) for the amazing styling framework.

---

Thank you for using **Briefly**! Simplify your reading and focus on what matters.

