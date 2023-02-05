import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
 
//import logger from "redux-logger"
 
const isDebug = () => {
  const env = process.env.REACT_APP_ENV;
  if (env === "production" || env === "staging") {
    return false;
  } else if (env === "development") {
    return true;
  }
};
// Persist config
// ref: https://github.com/rt2zz/redux-persist
export const persistConfig = {
  key: "primary_hfbjkdsfkqfqdjfkldsjfjsdofjeffhdsghsufdhgsgigosdjgoj_portfolio",
  storage,
  debug: isDebug(),
  stateReconciler: autoMergeLevel2,
  blacklist: ["notify", "modal", "routing", "ajax"],
};
