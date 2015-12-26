var graphql = require('graphql');


var hello = 'hello';
var world = 'world';

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve() {
          return hello;
        }
      },
      world: {
        type: graphql.GraphQLString,
        resolve() {
          return world;
        }
      }
    }
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'RootMutationType',
    fields:{
        hello:{
            type: graphql.GraphQLString,
            args: {
                NewHello:{
                    type: graphql.GraphQLString,
                }
            },
            resolve: function(obj, value){
                hello = value.NewHello
                return hello
            }
        },
        world:{
            type: graphql.GraphQLString,
            args: {
                NewWorld:{
                    type: graphql.GraphQLString,
                }
            },
            resolve: function(obj, value){
                world = value.NewWorld
                return world
            }
        }
    }
  }),
});

module.exports = schema;
