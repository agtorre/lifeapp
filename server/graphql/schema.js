import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';


var hello = 'hello';
var world = 'world';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return hello;
        }
      },
      world: {
        type: GraphQLString,
        resolve() {
          return world;
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields:{
        hello:{
            type: GraphQLString,
            args: {
                NewHello:{
                    type: GraphQLString,
                }
            },
            resolve: function(obj, {NewHello}){
                hello = NewHello
                return hello
            }
        },
        world:{
            type: GraphQLString,
            args: {
                NewWorld:{
                    type: GraphQLString,
                }
            },
            resolve: function(obj, {NewWorld}){
                world = NewWorld
                return world
            }
        }
    }
  }),
});

module.exports = schema;
