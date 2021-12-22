import { FormDataType } from "../types/FormData";

export const calculateDataLength = (lsData: FormDataType) => {
  let count = 0;
  let key: keyof typeof lsData;
  for (key in lsData) {
    const len = lsData[key]?.toString().length;
    if (len && len > 0) {
      count++;
    }
  }
  return count;
};
