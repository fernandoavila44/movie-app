import './styles/App.css'
import MainContent from './components/layout/mainContent.component'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import MovieDetailPage from './routes/movieDetail'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>Movie App</title>
          <link rel="canonical" href="https://www.movieapp.com/" />
        </Helmet>
        <MainContent>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='movie/:movieId' element={<MovieDetailPage />} />
            </Routes>
          </main>
        </MainContent>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
