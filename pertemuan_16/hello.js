// export const numbers = [1,2,3,4,5];

// export default const hello = (user) => {
//     console.log(`Hello, ${user}`);
// }
import {world} from './components/world.js';

export default const hello = (user) => {
    world();
    console.log(`Hello, ${user}`);
}

export default hello;