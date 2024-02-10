import './styles/App.css'
import MainContent from './components/layout/mainContent.component'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import MovieDetailPage from './routes/movieDetail'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MainContent>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:movieId' element={<MovieDetailPage />} />
          </Routes>
        </main>
      </MainContent>
    </QueryClientProvider>
  )
}

export default App
