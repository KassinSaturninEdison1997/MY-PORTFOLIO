import _ from "lodash";
import { getSideItems } from "./Options";

export const getPrevNextRoute = (currentCategory: string) => {
  const arrays = getSideItems();

  const position = _.findIndex(arrays, { key: currentCategory });

  return {
    prev: position > 0 ? arrays[position - 1] : undefined,
    next: position < _.size(arrays) ? arrays[position + 1] : undefined,
  };
};
