import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;
