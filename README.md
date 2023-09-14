# 📚 Documentação

## Componentes (Storybook)
Os componentes são documentados e visualizados no [Storybook](https://storybook.js.org/), onde você pode interagir com eles e ver exemplos de uso.

## Hooks e Classes (jsDocs)

Os hooks e as classes são bem documentados usando jsDocs. Isso inclui descrições detalhadas de cada hook ou classe, parâmetros aceitos, valores de retorno e exemplos de uso.

## Utilitários (Markdown)

Os utilitários são documentados usando Markdown. Aqui, você encontrará informações sobre como usar os utilitários, exemplos de código e outras dicas úteis.


> ## 📁 arquitetura do projeto
```shell

src
 ├─> components
     └─> name-component
          ├─> types(interfaces/types)
          ├─> storybook(stories-do-compoente)
          ├─> test/name.spec.tsx(epec-do-component)
          ├─> name-component.ts(component)
          └─> index.ts(export-do-component)
 ├─> pages
    └─> name-page
         ├─> types(interfaces/types)
         ├─> hooks(logica-da-page)
         ├─> components(componentes-locais)
         ├─> name-page.ts(page)
         └─> index.ts(export-da-page)
└─> main.ts
 
```



> ## 📚 Tabela de Conteúdo 

 
- [`createHttp()`](https://www.linkedin.com/feed/update/urn:li:activity:7107698003984941059/)
- [`useHttpQuery()`](https://www.linkedin.com/posts/isaac545454_useget-activity-7099364195527196672-21oh?utm_source=share&utm_medium=member_desktop)
- [`useHttpMutation()`](https://www.linkedin.com/posts/isaac545454_useget-activity-7099364195527196672-21oh?utm_source=share&utm_medium=member_desktop)
 



>## 🌐 createHttp() 

```js
//uso do createHttp
import { apiClient } from "@/infra/api";
import { createHttp } from "@/infra/http-client"; // Importe a classe e a função

// Crie uma instância de HttpClient configurada para um tipo específico de resposta
const { http } = createHttp<MyResponseType>();

// Faça uma solicitação GET para um endpoint
const response = await http.exec({
  endpoint: "/exemplo",
  method: "GET",
  params: { id: "1" },
});
```
>## 📡 useHttpQuery ()
```js
//uso do useHttpQuery 
import { useHttpQuery  } from '@/hooks/index';
import { endpoint } from '@/endpoint';

//parametros
-`queryKey` (QueryKey): Uma chave única que identifica a consulta ou recurso a ser buscado. Isso pode ser útil para cache ou invalidação de cache.
-`options` (UseQueryOptions): Opções adicionais para personalizar o comportamento do `useQuery` da biblioteca `react-query`.
-`HttpProps` (HttpPropsProps): Um objeto de configuração que define os detalhes da requisição HTTP GET.
-`endpoint` (string): O endpoint da API ou URL de onde os dados devem ser buscados.
-`headers` (object): Um objeto contendo cabeçalhos HTTP opcionais a serem enviados com a requisição.
-Outras opções relevantes para uma requisição HTTP GET, como `params`, `auth`, etc.

//exemplo de uso(obs: evitar usar string diretamente no endpoint)
const { data, isLoading, isError } = useHttpQuery <IResponsePost[]>({
    queryKey: ['getPosts'],
    request: { endpoint: endpoint.getPosts },
    options: {enabled: true}
});
```

>## 🔄 useHttpMutation()
```js
//uso do useHttpMutation
import { useHttpMutation } from '@/hooks/index';
import { endpoint } from '@/endpoint';

//parametros
- `options` (MutationOptions<TData, TError, TRequest>): Um objeto opcional contendo opções de configuração para a mutação. Essas opções são as mesmas que as fornecidas pelo `useMutation` do `react-query`. Elas permitem personalizar o comportamento da mutação, como manipulação de erros, atualização de cache, etc.
- `HttpProps` (HttpPropsProps): Um objeto que representa os dados da solicitação POST. Isso geralmente inclui o corpo da solicitação, cabeçalhos e outras informações relevantes para a solicitação.


//exemplo de uso(obs: evitar usar string diretamente no endpoint)
 const { isLoading, isError, isSuccess, mutate } = useHttpMutation<TData, TError, TRequest>({
    options: {
       // Opções de configuração da mutação (opcional),
    },
    req: {
       endpoint: endpoint.createPost 
    },
  });

  const handleSubmit = () => {
    mutate();
  };
```