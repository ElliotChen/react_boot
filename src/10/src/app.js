/**
 * Created by elliot on 15/05/2017.
 */
import _ from 'lodash';

import OurUtils from './util';

console.log(OurUtils);

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);

/**/
const utils = new OurUtils();
utils.sayHello();
