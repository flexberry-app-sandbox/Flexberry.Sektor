import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегСотрудEnum from '../enums/i-i-s-sektor-катег-сотруд';

export default FlexberryEnum.extend({
  enum: КатегСотрудEnum,
  sourceType: 'IIS.Sektor.КатегСотруд'
});
