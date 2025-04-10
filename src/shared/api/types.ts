import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestConfig<P = undefined, D = unknown, R = AxiosResponse<D>> = (
  args: P extends undefined
    ? { config?: AxiosRequestConfig<P> }
    : { params: P; config?: AxiosRequestConfig<P> }
) => Promise<R>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QuerySettings<T extends (...args: any[]) => any> = {
  options?: UseQueryOptions<Awaited<ReturnType<T>>, Error>;
} & Parameters<T>[0];

export type Clothes = {
  id: number;
  title: string;
  description: string | null;
  rating: number;
  price: number;
};

export type Color = {
  id: number;
  code: string;
  name: string;
};

export type Size = {
  id: number;
  name: string;
};

export type Sort = {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
};

export type PageClothingResponseDto = {
  totalElements: number;
  totalPages: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: false;
  };
  first: boolean;
  last: boolean;
  size: number;
  content: Clothes[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
};

export type GetClothesParams = {
  color?: string[];
  size?: string[];
  offset?: number;
  limit?: number;
};
