import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  ДоГода: 'до года',
  От1Года: 'от 1 года до 3-х л.',
  От3: 'от 3-х до 5-ти л.',
  От5: 'от 5-ти до 10-ти л.',
  Более10: 'более 10 л.'
});
