import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  from,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { setContext } from 'apollo-link-context';
import { take } from 'rxjs';
const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink,
  auth: AngularFireAuth
): ApolloClientOptions<any> {
  return {
    link: from([authCtx(auth), httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

// const httpLink = (httpLink: HttpLink) => {
//   // Create an http link:
//   const http = httpLink.create({
//     uri,
//   });

//   // Create a WebSocket link:
//   const ws = new WebSocketLink({
//     uri: 'ws://localhost:5000/',
//     options: {
//       reconnect: true,
//     },
//   });

//   // using the ability to split links, you can send data to each link
//   // depending on what kind of operation is being sent
//   const link = split(
//     // split based on operation type
//     ({ query }) => {
//       const x: any = getMainDefinition(query);
//       return x.kind === 'OperationDefinition' && x.operation === 'subscription';
//     },
//     ws,
//     http
//   );

//   return {
//     link,
//     // ... options
//   };
// };
const authCtx = (auth: AngularFireAuth) => {
  return <any>setContext(async () => {
    const token = await auth.idToken.pipe(take(1)).toPromise();
    return ()=> {
      return  (token == null || token == undefined)? {}: {headers: {
        Authorization: `Bearer ${token}`,
      }}
    } 
  });
};

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AngularFireAuth],
    },
  ],
})
export class GraphQLModule {}
