import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  причУвольн: DS.attr('string'),
  специалист: DS.belongsTo('i-i-s-sektor-специалист', { inverse: null, async: false }),
  рекомендации: DS.hasMany('i-i-s-sektor-рекомендац', { inverse: 'причинУвольн', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-sektor-причин-увольн.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причУвольн: {
    descriptionKey: 'models.i-i-s-sektor-причин-увольн.validations.причУвольн.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-причин-увольн.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-sektor-причин-увольн.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинУвольнE', 'i-i-s-sektor-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    специалист: belongsTo('i-i-s-sektor-специалист', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    причУвольн: attr('Причина увольнения', { index: 2 }),
    рекомендации: hasMany('i-i-s-sektor-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    })
  });

  modelClass.defineProjection('ПричинУвольнL', 'i-i-s-sektor-причин-увольн', {
    датаЗаполн: attr('Дата заполн', { index: 0 }),
    причУвольн: attr('Прич увольн', { index: 1 })
  });
};
