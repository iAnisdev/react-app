import { Store, createStore, combineReducers } from "redux";
import { AuthReducer } from "./Reducers/Auth";
import { UserReducer } from "./Reducers/User";

const Reducers = combineReducers({
    Auth: AuthReducer,
    User: UserReducer
})
export const store: Store = createStore(Reducers)


export type State = ReturnType<typeof Reducers>