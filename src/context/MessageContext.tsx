import { createContext } from "react";
import type { UserType } from "../types/usertypes";
import { myData } from "./userData";

const MessageContext = createContext<UserType>(myData);

export default MessageContext;