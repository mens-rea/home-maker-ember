import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.name.firstName();
  },

  description() {
    return faker.lorem.sentence();
  },

  amount() {
    return faker.commerce.price();
  },

  datePaid() {
    faker.seed();

    const random = faker.random.number();
    if (random % 2 === 0) {
      return;
    }
    
    return faker.date.past();
  }
});
