import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'mdb-react-ui-kit/dist/css/mdb.min.css';
 import "@fortawesome/fontawesome-free/css/all.min.css";

import "../src/Admin/Style/Style.css"
import store from "./Store.jsx"
import { Provider } from 'react-redux';


 createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
