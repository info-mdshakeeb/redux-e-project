import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './Redux/stroe'
import './index.css'
import routes from './routes'
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
)
