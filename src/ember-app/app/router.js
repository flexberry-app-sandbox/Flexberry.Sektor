import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sektor-анкеты-l');
  this.route('i-i-s-sektor-анкеты-e',
  { path: 'i-i-s-sektor-анкеты-e/:id' });
  this.route('i-i-s-sektor-анкеты-e.new',
  { path: 'i-i-s-sektor-анкеты-e/new' });
  this.route('i-i-s-sektor-причин-увольн-l');
  this.route('i-i-s-sektor-причин-увольн-e',
  { path: 'i-i-s-sektor-причин-увольн-e/:id' });
  this.route('i-i-s-sektor-причин-увольн-e.new',
  { path: 'i-i-s-sektor-причин-увольн-e/new' });
  this.route('i-i-s-sektor-специалист-l');
  this.route('i-i-s-sektor-специалист-e',
  { path: 'i-i-s-sektor-специалист-e/:id' });
  this.route('i-i-s-sektor-специалист-e.new',
  { path: 'i-i-s-sektor-специалист-e/new' });
});

export default Router;
