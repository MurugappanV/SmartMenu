import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';
import Db, {Person, Post} from './db';
import { resolver } from "graphql-sequelize";

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'This represent a Person',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(person) {
                    return person.id;
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(person) {
                    return person.firstName;
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(person) {
                    return person.lastName;
                }
            },
            email: {
                type: GraphQLString,
                resolve(person) {
                    return person.email;
                }
            },
            posts: {
                type: new GraphQLList(PostType),
                resolve(person) {
                    return person.getPosts();
                }
            }
        };
    }
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'This represent a Post',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(post) {
                    return post.id;
                }
            },
            title: {
                type: GraphQLString,
                resolve(post) {
                    return post.title;
                }
            },
            content: {
                type: GraphQLString,
                resolve(post) {
                    return post.content;
                }
            },
            person: {
                type: PersonType,
                resolve(post) {
                    return post.getPerson();
                }
            }
        };
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is a root query',
    fields: () => {
        return {
            people: {
                type: new GraphQLList(PersonType),
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    email: {
                        type: GraphQLString
                    }
                },
                resolve: resolver(Person, {
                    list: true
                })
            },
            posts: {
                type: new GraphQLList(PostType),
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: resolver(Post, {
                    list: true
                })
            },
        };
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Function to create stuff',
    fields() {
        return {
            addPerson: {
                type: PersonType,
                args: {
                    firstName: {
                        type:  GraphQLString
                    },
                    lastName: {
                        type:  GraphQLString
                    },
                    email: {
                        type:  GraphQLString
                    }
                },
                resolve(root, args) {
                    return Db.models.person.create({
                        firstName: args.firstName,
                        lastName: args.lastName,
                        email: args.email.toLowerCase()
                    });
                }

            }
        }
    }
})

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation 
})

export default Schema;