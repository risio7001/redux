import { createStore } from "redux";
import reducers from "./redux/reducer";

export const store = createStore(reducers);

// export const listen = store.subscribe(()=>console.log("변화감지"));