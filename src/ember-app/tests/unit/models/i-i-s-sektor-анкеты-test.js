import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sektor-анкеты', 'Unit | Model | i-i-s-sektor-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sektor-анкеты',
    'model:i-i-s-sektor-причин-увольн',
    'model:i-i-s-sektor-рекомендац',
    'model:i-i-s-sektor-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
