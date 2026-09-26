import { TRIAL, OPPORTUNIST, RUNNER, VISIONARY } from 'src/utils/licenseInfo';

export const menuLists = [
  {
    name: TRIAL,
    path: '/static/img/main_smart/trial.png',
    desc: 'trial',
    button: 'Exchange'
  },
  {
    name: OPPORTUNIST,
    path: '/static/img/main_smart/opportunity.png',
    desc: 'opportunist',
    button: 'Exchange'
  },
  {
    name: RUNNER,
    path: '/static/img/main_smart/runner.png',
    desc: 'runner',
    button: 'Active'
  },
  {
    name: VISIONARY,
    path: '/static/img/main_smart/visionary.png',
    desc: 'visionary',
    button: 'Upgrade now'
  }
];

export const licenseDetail = {
  Trial: {
    name: TRIAL,
    require: '100'
  },
  Opportunist: {
    name: OPPORTUNIST,
    require: '1000'
  },
  Runner: {
    name: RUNNER,
    require: '5000'
  },
  Visionary: {
    name: VISIONARY,
    require: '10000'
  }
};
