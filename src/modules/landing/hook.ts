import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCaseStudy } from "./types";
import { TMetaErrorResponse } from "@/entities";
import { GetDataCaseStudy } from "./api";

export const UseGetCaseStudy = (): UseQueryResult<TCaseStudy, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getCaseStudy"],
    queryFn: async () => await GetDataCaseStudy(),
  });
};
