export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('recipe', 2);
  server.createList('bill', 5);
}
