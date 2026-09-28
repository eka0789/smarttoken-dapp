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
    content: `The frontier rewards the bold. Push your team's reach into new territory by growing your downline and advancing your ladder depth — the wider your frontier, the bigger the quest reward.`,
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
    content: `Commanders don't just recruit — they organize. Build a structured team, keep your members active, and lead by example to claim the Commander quest rewards.`,
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
    content: `A king leads from the front. Reach a high nobility title while keeping your team growing, and prove that on-chain leadership deserves its crown.`,
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
    content: `Be part of the wind of change. Drive volume through your Smart Army network and unlock one of the largest quest payouts for making the ecosystem move.`,
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
    content: `Some missions are not for everyone. Complete this premium challenge and claim one of the rarest quest rewards in the ecosystem.`,
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
    content: `Cross the desert and stay standing. A high-stakes quest for leaders who keep their teams active through difficult market conditions.`,
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
    content: `They said it was impossible. Build an extraordinary team and complete this mission to earn a reward reserved for the few.`,
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
    content: `Reach god-like status within the ecosystem: top-tier team growth, sustained farming volume and an active royalty-level network.`,
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
    content: `The legendary army quest is the final test of leadership. Assemble the strongest Smart Army family and claim the ultimate quest reward.`,
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
    content: `Farm consistently and let your yield compound. This quest tracks your farming output across multiple cycles — the more you farm, the more SMTC you take home.`,
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
    content: `Crazy about farming? Reward your dedication: hit demanding farming milestones in consecutive cycles to collect all tiers of this quest.`,
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
