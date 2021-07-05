import {useContext, createContext} from 'react';
import {User, IUserContext} from '../../typings';

const UserContext = createContext(null);

export const UserProvider = ({value, children}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext<IUserContext>(UserContext);
