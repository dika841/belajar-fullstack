import { api } from "@/libs";
import { TCaseStudy } from "./types";

export const GetDataCaseStudy = async (): Promise<TCaseStudy> => {
  const { data } = await api.get<TCaseStudy>("/case-study");
  return data;
};
