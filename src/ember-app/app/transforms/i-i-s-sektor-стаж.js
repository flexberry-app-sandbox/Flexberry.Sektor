import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтажEnum from '../enums/i-i-s-sektor-стаж';

export default FlexberryEnum.extend({
  enum: СтажEnum,
  sourceType: 'IIS.Sektor.Стаж'
});
