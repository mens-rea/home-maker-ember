export default function() {
  this.get('/recipes');
  this.get('/recipes/:id');
  this.post('/recipes');
  this.delete('/recipes/:id');
}
