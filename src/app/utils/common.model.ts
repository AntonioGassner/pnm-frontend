import { HttpErrorResponse } from '@angular/common/http';

export type OperationType = 'update' | 'delete' | 'create' | 'search' | 'load' | 'reload' | 'sort' | 'pagination' | 'filter';

export interface IListSort {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ITestSort {
  direction: 'asc' | 'desc';
}

export interface IListData<T> {
  total: number;
  data: T[];
}

export interface IListPagination {
  limit: number;
  offset: number;
}

export type GridModeType = 'card' | 'grid';
export type EntityKeyType = string | number;

export interface Pageable<T> {
  hasNextPage?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
  content?: T[];
}

export interface Item {
  text?: string;
  key: string;
}



export interface ConfigEntity {
  codice?: string;
  descrizione?: string;
}

export function serializeSort(sort: IListSort[], defaultSort: IListSort[] | string = []) {
  if (sort && sort.length > 0) return sort.map((v) => `${v.field},${v.direction}`);
  if (defaultSort === "") return null;
  if (typeof defaultSort === 'string') return [defaultSort + ',asc'];
  return defaultSort.map((v) => `${v.field},${v.direction}`);
}

interface BaseResult {
  result: boolean;
  input?: any;
}

export interface CrudResult<T = any> extends BaseResult {
  result: boolean;
  operation: OperationType;
  response?: T;
}

export type ErrorCodeType = 'INVALID_PASSWORD';

export interface ErrorResult extends BaseResult {
  result: false;
  operation: OperationType;
  type: 'remote' | 'local';
  statusCode?: number;
  code?: ErrorCodeType;
  text?: string;
}

export type OperationResult<T = any> = CrudResult<T> | ErrorResult;

export function buildErrorResult(err: any, operation: OperationType): ErrorResult {
  if (err instanceof HttpErrorResponse) {
    return {
      result: false,
      operation,
      statusCode: err.status,
      code: err.error?.code,
      type: 'remote',
      text: err.error?.text || err.message,
    };
  }
  return {
    result: false,
    operation,
    type: 'local',
    text: err + '',
  };
}

export function buildSuccessResult<T>(response: T, operation: OperationType): CrudResult<T> {
  return {
    result: true,
    operation,
    response,
  };
}

