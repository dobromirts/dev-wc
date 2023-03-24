import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './master-view/master-view';
import './master-view1/master-view1';

export const routes: Route[] = [
  { path: '', component: 'app-master-view', name: 'Master View' },
  { path: 'master-view', component: 'app-master-view', name: 'Master View' },
  { path: 'master-view1', component: 'app-master-view1', name: 'Master View1' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
