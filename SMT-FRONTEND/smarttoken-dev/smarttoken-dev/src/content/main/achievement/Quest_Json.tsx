const questList = [
  {
    title: 'Early Run',
    content: `Runners move fast like the wind, growing faster than most people. Buy a runner's license to grow up much faster. Earn extra quest rewards as your precious gift for becoming a better Smart Army!`,
    requirement: 'Upgrade or buy runner license',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'circleTree',
        path: '/static/img/main_achievement/circleTree.svg',
        title: '0.2 SMTC'
      }
    ],
    status: 'Active',
    available: '200'
  },

  {
    title: 'Elon’s Eye',
    content: `The most successful people are visionary people. They innovate and accelerate their successful journey as if nobody could beat them!. You deserve massive appreciation as you are the only one who thought about changing the world!`,
    requirement: 'Upgrade or buy visionary license',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'circleTree',
        path: '/static/img/main_achievement/circleTree.svg',
        title: '0.2 SMTC'
      }
    ],
    status: 'Pending',
    available: '100'
  },

  {
    title: 'Sweet Army',
    content: `Becoming one of the Smart Army family is like putting your faith in each of us, working together towards the same dream. We need each other for a long term to pursue our dream. Be with us, become a loyal Smart Army.`,
    requirement: 'Extend the license 1x',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Inactive',
    available: '200'
  },

  {
    title: 'Loyal Army',
    content: `Enjoy the journey towards eternal wealth. You are likely to have a strong commitment towards becoming the future kings. Nobody could prevent your way to the king's throne!`,
    requirement: 'Extend the license 3x',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Closed',
    available: '200'
  },

  {
    title: 'Forever Army',
    content: `You are one of the heroes that never stop struggling to grow the golden tree with the other Smart Army. Smart Ecosystem team are watching you. We know you deserve the best place among other Smart Army!`,
    requirement: 'Extend the license 5x',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Active',
    available: '200'
  },

  {
    title: 'The Frontier',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '10 - 99 lv.1 members extending license 1x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Pending',
    available: '200'
  },

  {
    title: 'The Commander',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '100 - 499 lv.1 members extending license 1x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Pending',
    available: '200'
  },

  {
    title: 'Lead Like a King',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '500 or more members extending license 1x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Pending',
    available: '50'
  },

  {
    title: 'Wind of Change',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '10 - 49 lv.1 members extending license 3x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '40 SMTC'
      }
    ],
    status: 'Inactive',
    available: '000'
  },

  {
    title: 'Fallen Angel',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '50 - 299 lv.1 members extending license 3x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '60 SMTC'
      }
    ],
    status: 'Inactive',
    available: '000'
  },

  {
    title: 'Lion of Desert',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '300 or more members extending license 3x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '100 SMTC'
      }
    ],
    status: 'Inactive',
    available: '000'
  },

  {
    title: 'Impossible Mission',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '10 - 29 lv.1 members extending license 5x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '200 SMTC'
      }
    ],
    status: 'Pending',
    available: '000'
  },

  {
    title: 'God-like',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '30 - 99 lv.1 members extending license 5x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '500 SMTC'
      }
    ],
    status: 'Pending',
    available: '000'
  },

  {
    title: 'Legendary Army',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: '100 or more members extending license 5x',
    type: ['one-time', 'team'],
    reward: [
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '1000 SMTC'
      }
    ],
    status: 'Pending',
    available: '000'
  },

  {
    title: 'Rich Farmer',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: 'Farm 10,000 SMT - 49,999 SMT',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.1 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.2 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '0.5 SMTC'
      }
    ],
    status: 'Pending',
    available: '000'
  },

  {
    title: 'Crazy Farmer',
    content: `uis volutpat maximus nunc eget ultricies. Pellentesque quis consectetur sapien. Proin condimentum pellentesque odio, eget sagittis orci pellentesque ac. Proin pretium odio vel est egestas, a facilisis lectus tincidunt. Nulla sollicitudin erat vitae felis pharetra, id viverra dolor mattis. Etiam pharetra urna ut bibendum ornare.`,
    requirement: 'Farm 50,000 SMT - 99,999 SMT',
    type: ['one-time', 'personal'],
    reward: [
      {
        name: 'yellow',
        path: '/static/img/main_achievement/yellow.svg',
        title: '0.3 SMTC'
      },
      {
        name: 'red',
        path: '/static/img/main_achievement/red.svg',
        title: '0.5 SMTC'
      },
      {
        name: 'black',
        path: '/static/img/main_achievement/black.svg',
        title: '1 SMTC'
      }
    ],
    status: 'Pending',
    available: '000'
  }

  //Farmer Like a King
];

export default questList;
