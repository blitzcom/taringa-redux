// eslint-disable-next-line import/no-extraneous-dependencies
import { get } from 'bdd-lazy-var/getter';

global.$ = get;

global.context = describe;
