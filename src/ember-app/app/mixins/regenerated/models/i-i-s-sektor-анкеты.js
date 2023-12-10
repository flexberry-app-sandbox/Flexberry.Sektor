import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  взаимCКоллег: DS.attr('number'),
  взаимСРуковод: DS.attr('number'),
  возрастСотруд: DS.attr('i-i-s-sektor-возраст'),
  датаЗаполн: DS.attr('date'),
  интенсРаботы: DS.attr('number'),
  информСотруд: DS.attr('number'),
  какойСтаж: DS.attr('i-i-s-sektor-стаж'),
  карьерРоста: DS.attr('number'),
  коммент: DS.attr('string'),
  органРабочПроц: DS.attr('number'),
  относКатСотр: DS.attr('i-i-s-sektor-катег-сотруд'),
  офицПризЗасл: DS.attr('number'),
  оценивРабот: DS.attr('number'),
  престиж: DS.attr('number'),
  размЗарабПлат: DS.attr('number'),
  результРабот: DS.attr('number'),
  санитГигиен: DS.attr('number'),
  системАдаптац: DS.attr('number'),
  системЛьгот: DS.attr('number'),
  системОбучен: DS.attr('number'),
  системПремир: DS.attr('number'),
  снабжНеобхИнстр: DS.attr('number'),
  содержРабот: DS.attr('number'),
  специалист: DS.belongsTo('i-i-s-sektor-специалист', { inverse: null, async: false })
});

export let ValidationRules = {
  взаимCКоллег: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.взаимCКоллег.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  взаимСРуковод: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.взаимСРуковод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  возрастСотруд: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.возрастСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  интенсРаботы: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.интенсРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  информСотруд: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.информСотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  какойСтаж: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.какойСтаж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карьерРоста: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.карьерРоста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  коммент: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.коммент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  органРабочПроц: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.органРабочПроц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  относКатСотр: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.относКатСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  офицПризЗасл: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.офицПризЗасл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оценивРабот: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.оценивРабот.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  престиж: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.престиж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  размЗарабПлат: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.размЗарабПлат.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  результРабот: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.результРабот.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  санитГигиен: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.санитГигиен.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  системАдаптац: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.системАдаптац.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  системЛьгот: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.системЛьгот.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  системОбучен: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.системОбучен.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  системПремир: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.системПремир.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снабжНеобхИнстр: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.снабжНеобхИнстр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  содержРабот: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.содержРабот.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-анкеты.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетыE', 'i-i-s-sektor-анкеты', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    взаимСРуковод: attr('Взаимоотношения с руководителем', { index: 1 }),
    взаимCКоллег: attr('Взаимоотношения с коллегами', { index: 2 }),
    санитГигиен: attr('Санитарно-гигиенические условия', { index: 3 }),
    снабжНеобхИнстр: attr('Снабжение необходимыми инструментами', { index: 4 }),
    интенсРаботы: attr('Интенсивность работы', { index: 5 }),
    информСотруд: attr('Информированность сотрудников', { index: 6 }),
    размЗарабПлат: attr('Размер заработной платы', { index: 7 }),
    системПремир: attr('Система премирования', { index: 8 }),
    системЛьгот: attr('Система льгот, компенсаций', { index: 9 }),
    офицПризЗасл: attr('Система официального признания заслуг', { index: 10 }),
    карьерРоста: attr('Перспективы карьерного роста', { index: 11 }),
    системОбучен: attr('Система обучения и профессионального развития', { index: 12 }),
    системАдаптац: attr('Система адаптации и наставничества', { index: 13 }),
    содержРабот: attr('Содержание работы', { index: 14 }),
    органРабочПроц: attr('Организация рабочего процесса', { index: 15 }),
    престиж: attr('Престижность ПАО «Россети Сибирь»', { index: 16 }),
    оценивРабот: attr('Оцениваете работу в ПАО «Россети Сибирь»', { index: 17 }),
    относКатСотр: attr('Категория сотрудников', { index: 18 }),
    какойСтаж: attr('Стаж', { index: 19 }),
    возрастСотруд: attr('Возраст сотрудника', { index: 20 }),
    коммент: attr('Комментарии уволившегося сотрудника', { index: 21 })
  });

  modelClass.defineProjection('АнкетыL', 'i-i-s-sektor-анкеты', {
    датаЗаполн: attr('Дата заполн', { index: 0 }),
    системЛьгот: attr('Систем льгот', { index: 1 }),
    системПремир: attr('Систем премир', { index: 2 }),
    содержРабот: attr('Содерж работ', { index: 3 }),
    взаимСРуковод: attr('Взаим с руковод', { index: 4 }),
    информСотруд: attr('Информ сотруд', { index: 5 }),
    размЗарабПлат: attr('Разм зараб плат', { index: 6 }),
    органРабочПроц: attr('Орган рабоч проц', { index: 7 }),
    оценивРабот: attr('Оценив работ', { index: 8 }),
    результРабот: attr('Результ работ', { index: 9 }),
    системАдаптац: attr('Систем адаптац', { index: 10 }),
    интенсРаботы: attr('Интенс работы', { index: 11 }),
    взаимCКоллег: attr('Взаим c коллег', { index: 12 }),
    системОбучен: attr('Систем обучен', { index: 13 }),
    престиж: attr('Престиж', { index: 14 }),
    снабжНеобхИнстр: attr('Снабж необх инстр', { index: 15 }),
    какойСтаж: attr('Какой стаж', { index: 16 }),
    возрастСотруд: attr('Возраст сотруд', { index: 17 })
  });
};
