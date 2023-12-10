import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSektorАнкетыLForm from './forms/i-i-s-sektor-анкеты-l';
import IISSektorПричинУвольнLForm from './forms/i-i-s-sektor-причин-увольн-l';
import IISSektorСпециалистLForm from './forms/i-i-s-sektor-специалист-l';
import IISSektorАнкетыEForm from './forms/i-i-s-sektor-анкеты-e';
import IISSektorПричинУвольнEForm from './forms/i-i-s-sektor-причин-увольн-e';
import IISSektorСпециалистEForm from './forms/i-i-s-sektor-специалист-e';
import IISSektorАнкетыModel from './models/i-i-s-sektor-анкеты';
import IISSektorПричинУвольнModel from './models/i-i-s-sektor-причин-увольн';
import IISSektorРекомендацModel from './models/i-i-s-sektor-рекомендац';
import IISSektorСпециалистModel from './models/i-i-s-sektor-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sektor-анкеты': IISSektorАнкетыModel,
    'i-i-s-sektor-причин-увольн': IISSektorПричинУвольнModel,
    'i-i-s-sektor-рекомендац': IISSektorРекомендацModel,
    'i-i-s-sektor-специалист': IISSektorСпециалистModel
  },

  'application-name': 'Sektor',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sektor',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor',
          title: 'Sektor'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-sektor-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-sektor-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          }
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-sektor-специалист-l': {
            caption: 'Специалист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-sektor-анкеты-l': IISSektorАнкетыLForm,
    'i-i-s-sektor-причин-увольн-l': IISSektorПричинУвольнLForm,
    'i-i-s-sektor-специалист-l': IISSektorСпециалистLForm,
    'i-i-s-sektor-анкеты-e': IISSektorАнкетыEForm,
    'i-i-s-sektor-причин-увольн-e': IISSektorПричинУвольнEForm,
    'i-i-s-sektor-специалист-e': IISSektorСпециалистEForm
  },

});

export default translations;
