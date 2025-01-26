import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-photo-album/rows.css";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import theme from './theme.js'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode >,
)
