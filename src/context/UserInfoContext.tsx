import { createContext } from "react";
import { myData } from './userData';

const UserInfoContext = createContext(myData);

export default UserInfoContext;