import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";
import { IGet } from "@models/IGet";
import { createHttp } from "../../infra/http-axios-client";

interface IGetMutation<TData, TError> {
  queryKey: QueryKey;
  options?: UseQueryOptions<TData, TError>;
  request: IGet;
}
/**
 * Custom Hook: useGet
 *
 * O `useGet` é um custom hook que simplifica a lógica de fazer uma requisição HTTP GET a uma API ou servidor usando a biblioteca `react-query`.
 *
 * @template TData - O tipo dos dados que serão retornados pela requisição.
 * @template TError - O tipo de erro que pode ocorrer na requisição.
 *
 * @param {IGetMutation<TData, TError>} options - Opções de configuração do custom hook.
 * @param {QueryKey} options.queryKey - Uma chave única que identifica a consulta ou recurso a ser buscado. Isso pode ser útil para cache ou invalidação de cache.
 * @param {UseQueryOptions<TData, TError>} [options.options] - Opções adicionais para personalizar o comportamento do `useQuery` da biblioteca `react-query`.
 * @param {IGet} options.request - Um objeto de configuração que define os detalhes da requisição HTTP GET.
 * @param {string} options.request.endpoint - O endpoint da API ou URL de onde os dados devem ser buscados.
 * @param {object} [options.request.headers] - Um objeto contendo cabeçalhos HTTP opcionais a serem enviados com a requisição.
 *
 * @returns {UseQueryResult<TData, TError>} - Um objeto do tipo `UseQueryResult` que inclui propriedades como `data`, `isLoading` e `isError` para lidar com o estado da requisição e seus resultados.
 *
 * @example
 * // Exemplo de uso do `useGet` em um componente React.
 * import React from 'react';
 * import { useGet } from './useGet';
 *
 * function PostList() {
 *   const { data, isLoading, isError } = useGet<IResponsePost[]>({
 *     queryKey: ['getPosts'],
 *     request: { endpoint: '/api/posts' },
 *   });
 *
 *   if (isLoading) {
 *     return <p>Carregando...</p>;
 *   }
 *
 *   if (isError) {
 *     return <p>Ocorreu um erro ao buscar os posts.</p>;
 *   }
 *
 *   return (
 *     <div>
 *       <h1>Lista de Posts</h1>
 *       <ul>
 *         {data.map((post) => (
 *           <li key={post.id}>{post.title}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 *
 * export  PostList;
 */


export const useGet = <TData, TError = unknown>({
  queryKey,
  options,
  request,
}: IGetMutation<TData, TError>): UseQueryResult<TData, TError> => {
  const { http } = createHttp<TData>()
  const data = useQuery(queryKey, () => http.exec({
    ...request, method: "GET",
  }), options);
  return data;
};
