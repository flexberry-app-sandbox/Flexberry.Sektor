import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sektor-рекомендац', 'Unit | Serializer | i-i-s-sektor-рекомендац', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sektor-рекомендац',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sektor-возраст',
    'transform:i-i-s-sektor-катег-сотруд',
    'transform:i-i-s-sektor-стаж',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
