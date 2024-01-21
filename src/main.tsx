
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { jwtDecode } from 'jwt-decode'
import { UserActionTypes } from './store/reducers/userReducer/types.ts'

if(localStorage.accessToken){
    const decodedToken = jwtDecode(localStorage.accessToken);
    store.dispatch({
        type: UserActionTypes.LOGIN_USER,
        payload:{decodedToken}
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(


<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
    
)
