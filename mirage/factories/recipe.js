import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },

  description() {
    return faker.lorem.paragraph();
  },
});
