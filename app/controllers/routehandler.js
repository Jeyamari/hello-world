import Controller from '@ember/controller';
export default Controller.extend({
  getValues: '',
  getDirector: '',
  actions: {
    async getMovies() {
      let response = await fetch("/api/movies");
      let result = await response.json();
      this.set('getValues', result.data);
      return result.data;
    },
    async getDirectors() {
      let response = await fetch("/api/directors");
      let result = await response.json();
      this.set('getDirector', result.data);
      return result.data;
    },
    async postMovies() {
      let data= { year:2019, title: 'Incredibles' };
      await fetch("/api/movies", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),              
      });
      this.send('getMovies');
    },
    async getMoviesById(id) {
      let response = await fetch("/api/movies/" + id);
      let result = await response.json();
      this.set('getValues', result.data);
      return result.data;    
    },
    async updateMoviesById(id) {
      let data = { year: 2020, title: 'Incredibles2' };
      await fetch("api/movies/" + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      this.send('getMovies');
    },
    async deleteMoviesById(id) {
      await fetch("api/movies/" + id, {
        method: 'DELETE' 
      });
      this.send('getMovies');
    }
  },
});