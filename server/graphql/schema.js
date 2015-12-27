import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';


import {getCard, setCard} from '../models/card';


var hello = 'hello';
var world = 'world';


var cardInterface = new GraphQLObjectType({
    name: 'Card',
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Name of the card",
        },
        points_type: {
            type: GraphQLString,
            description: "Types of points to record",
        },
        points: {
            type: GraphQLInt,
            description: "Point Value",
        },
    }),
});


var cardQuery = new GraphQLObjectType({
    name: 'CardQueryType',
    fields: () => ({
      card:{
          type: cardInterface,
          args:{
              name:{ type: GraphQLString }
          },
          resolve: (obj, {name}) => getCard(name)
      }
    })
});


var cardMutate = new GraphQLObjectType({
    name: 'CardMutationType',
    fields: () => ({
      card:{
          type: cardInterface,
          args:{
              name:{ type: GraphQLString },
              points_type:{ type: GraphQLString },
              points:{ type: GraphQLInt },
          },
          resolve: (obj, {name, points_type, points}) => setCard(name, points_type, points),
      },
    })
});



export var cardGraphQLSchema = new GraphQLSchema({
  query: cardQuery,
  mutation: cardMutate
});
