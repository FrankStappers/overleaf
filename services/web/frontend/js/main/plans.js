/* eslint-disable
    camelcase,
    max-len
*/
import App from '../base'
import getMeta from '../utils/meta'
App.factory('MultiCurrencyPricing', function () {
  const currencyCode = getMeta('ol-recomendedCurrency')

  return {
    currencyCode,

    plans: {
      USD: {
        symbol: '$',
        student: {
          monthly: '$8',
          annual: '$80',
        },
        personal: {
          monthly: '$10',
          annual: '$120',
        },
        collaborator: {
          monthly: '$15',
          annual: '$180',
        },
        professional: {
          monthly: '$30',
          annual: '$360',
        },
      },

      EUR: {
        symbol: '€',
        student: {
          monthly: '€7',
          annual: '€70',
        },
        personal: {
          monthly: '€9',
          annual: '€108',
        },
        collaborator: {
          monthly: '€14',
          annual: '€168',
        },
        professional: {
          monthly: '€28',
          annual: '€336',
        },
      },

      GBP: {
        symbol: '£',
        student: {
          monthly: '£6',
          annual: '£60',
        },
        personal: {
          monthly: '£8',
          annual: '£96',
        },
        collaborator: {
          monthly: '£12',
          annual: '£144',
        },
        professional: {
          monthly: '£24',
          annual: '£288',
        },
      },

      SEK: {
        symbol: 'kr',
        student: {
          monthly: '60 kr',
          annual: '600 kr',
        },
        personal: {
          monthly: '73 kr',
          annual: '876 kr',
        },
        collaborator: {
          monthly: '110 kr',
          annual: '1320 kr',
        },
        professional: {
          monthly: '220 kr',
          annual: '2640 kr',
        },
      },
      CAD: {
        symbol: '$',
        student: {
          monthly: '$9',
          annual: '$90',
        },
        personal: {
          monthly: '$11',
          annual: '$132',
        },
        collaborator: {
          monthly: '$17',
          annual: '$204',
        },
        professional: {
          monthly: '$34',
          annual: '$408',
        },
      },

      NOK: {
        symbol: 'kr',
        student: {
          monthly: '60 kr',
          annual: '600 kr',
        },
        personal: {
          monthly: '73 kr',
          annual: '876 kr',
        },
        collaborator: {
          monthly: '110 kr',
          annual: '1320 kr',
        },
        professional: {
          monthly: '220 kr',
          annual: '2640 kr',
        },
      },

      DKK: {
        symbol: 'kr',
        student: {
          monthly: '50 kr',
          annual: '500 kr',
        },
        personal: {
          monthly: '60 kr',
          annual: '720 kr',
        },
        collaborator: {
          monthly: '90 kr',
          annual: '1080 kr',
        },
        professional: {
          monthly: '180 kr',
          annual: '2160 kr',
        },
      },

      AUD: {
        symbol: '$',
        student: {
          monthly: '$10',
          annual: '$100',
        },
        personal: {
          monthly: '$12',
          annual: '$144',
        },
        collaborator: {
          monthly: '$18',
          annual: '$216',
        },
        professional: {
          monthly: '$35',
          annual: '$420',
        },
      },

      NZD: {
        symbol: '$',
        student: {
          monthly: '$10',
          annual: '$100',
        },
        personal: {
          monthly: '$12',
          annual: '$144',
        },
        collaborator: {
          monthly: '$18',
          annual: '$216',
        },
        professional: {
          monthly: '$35',
          annual: '$420',
        },
      },

      CHF: {
        symbol: 'Fr',
        student: {
          monthly: 'Fr 8',
          annual: 'Fr 80',
        },
        personal: {
          monthly: 'Fr 10',
          annual: 'Fr 120',
        },
        collaborator: {
          monthly: 'Fr 15',
          annual: 'Fr 180',
        },
        professional: {
          monthly: 'Fr 30',
          annual: 'Fr 360',
        },
      },

      SGD: {
        symbol: '$',
        student: {
          monthly: '$12',
          annual: '$120',
        },
        personal: {
          monthly: '$13',
          annual: '$156',
        },
        collaborator: {
          monthly: '$20',
          annual: '$240',
        },
        professional: {
          monthly: '$40',
          annual: '$480',
        },
      },
    },
  }
})
