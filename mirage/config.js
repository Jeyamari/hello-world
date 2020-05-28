import faker from 'faker';
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.get('api/movies', function(schema) {
    let movies = schema.movies.all();
    let json = this.serialize(movies);
    return json;
  });
  this.post('api/movies', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    let brad_bird = schema.directors.create({ "id": faker.random.number() % 9});
    schema.movies.create({
      title: JSON.parse(request.requestBody).title,
      year: JSON.parse(request.requestBody).year,
      director: brad_bird
    });
    console.log(schema.movies.all());
  });
  this.get('api/directors');
  this.get('api/movies/:id', (schema, request) => {
    let id = request.params.id; 
    return schema.movies.find(id);
  });
  this.put('/api/movies/:id', function(schema, request) {
    let id = request.params.id;
    let attrs = JSON.parse(request.requestBody);
    return schema.movies.find(id).update(attrs);
  });
  this.del('/api/movies/:id', function(schema, request) {
    let id=request.params.id;
    schema.movies.find(id).destroy();
  });
}
