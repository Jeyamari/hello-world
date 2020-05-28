import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
export default Factory.extend({
    id(i) {
        return i;
    },
    firstName() {
        return faker.name.firstName();
    },
    lastName() {
        return faker.name.lastName();
    },
    //name: firstName() + lastName(),
    awards() {
        return faker.random.number() % 5;
    }

});