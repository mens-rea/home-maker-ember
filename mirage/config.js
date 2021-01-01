export default function() {
  this.get('/recipes');
  this.get('/recipes/:id');
  this.post('/recipes');
  this.delete('/recipes/:id');
  this.patch('/recipes/:id');

  this.get('/bills');
  this.get('/bills/:id');
  this.post('/bills');
  this.delete('/bills/:id');
  this.patch('/bills/:id');
}
