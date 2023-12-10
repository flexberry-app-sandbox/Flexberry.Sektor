import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sektor',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor',
          title: 'Sektor'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
