import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from '../sagas/sagaRoot';
import { createStore, applyMiddleware/*, compose*/ } from 'redux';

const sagaMiddleware = createSagaMiddleware();
let finalStore;
if (process.env.NODE_ENV === 'production') {
	// finalStore = createStore(rootReducer, applyMiddleware(thunk));
	finalStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware)));
} else {
	// const compMware = compose(applyMiddleware(thunk), /*applyMiddleware(sagaMiddleware),*/ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	const compMware = composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware));
	finalStore = createStore(rootReducer, compMware);
}
sagaMiddleware.run(sagaRoot)
export default finalStore;

// sagaMiddleware.run(mySaga);
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer, 
// 	window.__REDUX_DEVTOOLS_EXTENSION__ 
// 	&& window.__REDUX_DEVTOOLS_EXTENSION__());