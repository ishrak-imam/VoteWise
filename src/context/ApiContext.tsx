import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject, createHttpLink} from '@apollo/client';
import {useNetwork} from '@atoms/network';

const API_URI = 'https://graph.litentry.io/graphql';

type ApiContextType = {
  client: ApolloClient<NormalizedCacheObject>;
};

const ApiContext = React.createContext<ApiContextType | undefined>(undefined);

/* eslint-disable @typescript-eslint/no-explicit-any */
const mergeFunc = (existing: any, incoming: any, {args}: any) => {
  const offset = args ? args.offset : 0;
  const merged = existing ? existing.slice(0) : [];
  for (let i = 0; i < incoming.length; ++i) {
    merged[offset + i] = incoming[i];
  }
  return merged;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export function ApiClientProvider({children}: {children: React.ReactNode}) {
  const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject>>();
  const {currentNetwork} = useNetwork();

  React.useEffect(() => {
    const init = async () => {
      const cache = new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              substrateChainCouncil: {
                merge: true,
              },
              substrateChainAccount: {
                merge: true,
              },
              substrateChainTips: {
                keyArgs: [],
                merge: mergeFunc,
              },
              substrateChainDemocracyReferendums: {
                keyArgs: [],
                merge: mergeFunc,
              },
              substrateChainDemocracyProposals: {
                keyArgs: [],
                merge: mergeFunc,
              },
            },
          },
        },
      });

      const apolloClient = new ApolloClient({
        link: createHttpLink({
          uri: API_URI,
          headers: {
            'substrate-network': currentNetwork.key,
          },
        }),
        cache,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
          },
        },
      });
      setClient(apolloClient);
    };

    init();
  }, [currentNetwork.key]);

  if (!client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ApiContext.Provider value={{client}}>{children}</ApiContext.Provider>
    </ApolloProvider>
  );
}

export function useApiClient() {
  const context = React.useContext(ApiContext);
  if (!context) {
    throw new Error('useClient must be used within ApiClientProvider');
  }
  return {client: context.client};
}
