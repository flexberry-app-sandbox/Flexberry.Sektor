import {
  defineNamespace,
  defineProjections,
  Model as АнкетыMixin
} from '../mixins/regenerated/models/i-i-s-sektor-анкеты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
