import './styles/App.css'
import MainContent from './components/layout/mainContent.component'
import MoviesHome from './components/moviesHome/component'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MainContent>
        <MoviesHome />
      </MainContent>
    </QueryClientProvider>
  )
}

export default App
