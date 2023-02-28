import { useContext } from 'react';
import { PropsContext, DispatchContext } from '../context';

export const useProps = () => useContext(PropsContext)

export const useDispatch = () => useContext(DispatchContext)