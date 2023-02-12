import _ from "lodash";

let currentMsIndex: number = 0;
let lastTimestamp: number = 0;
 
const chars = "abcdefghijklmnopqrstuvwxyz";
 
export function IDSource(): string {
  const currentTimestamp = Date.now();
  if (currentTimestamp !== lastTimestamp) {
    currentMsIndex = 1e6 + Math.floor(Math.random() * 100000);
    lastTimestamp = currentTimestamp;
  }
  currentMsIndex += 111;
  const id1 = currentTimestamp.toString(36) + currentMsIndex.toString(36);
  const id2 = id1.split("").reverse().join("");
  let prefix = "";
  for (let i = 0; i < 4; i++) {
    prefix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix + id2;
}

export const cleanUndefinedKey = (object: any) => {
  if (!_.isEmpty(_.keys(object))) {
    _.map(_.keys(object), (cle: string) => {
      if (cle === "id" || object[cle] === undefined) {
        delete object[cle];
      }
    });
    return object;
  }
  return object;
};