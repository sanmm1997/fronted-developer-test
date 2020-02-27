import React from 'react';
import Router from "../routes/Router";
import {Provider} from "react-redux";
import store from "../store/store";

const App = () => (
    /* Implement redux store */
    <Provider store={store}>
        {/*Router includes Browser and basic Layout for render pages*/}
        <Router />
    </Provider>
);

export default App;
