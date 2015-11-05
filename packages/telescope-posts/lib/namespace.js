/**
 * The global namespace/collection for Posts.
 * @namespace Posts
 */
Posts = new Oracle.Collection("posts");
if(Meteor.isServer) Posts.setOracleOptions({sqlDebug: true});
