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
    return faker.date.past();
  }
});
