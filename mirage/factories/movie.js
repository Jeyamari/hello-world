import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
export default Factory.extend({
    id(i) {
        return i;
    },
    year: 2018,
    title() {
        return faker.name.firstName();
    }
});