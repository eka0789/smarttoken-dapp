import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

/********************  MAIN COMPONENTS *******************/
//main/dashboard
const MainDashboard = Loader(lazy(() => import('src/content/main/dashboard')));
//main/rewards
const MainReward = Loader(lazy(() => import('src/content/main/reward')));
//main/rewards/daily-farming
const RewardDailyFarming = Loader(
  lazy(() => import('src/content/main/reward/daily-farming'))
);
//main/rewards/nobility
const RewardNobilityReward = Loader(
  lazy(() => import('src/content/main/reward/nobility'))
);
//main/rewards/nobility/golden
const NobilityGoldenPhase = Loader(
  lazy(() => import('src/content/main/reward/nobility/golden'))
);
//main/rewards/nobility/passive
const NobilityPassivePhase = Loader(
  lazy(() => import('src/content/main/reward/nobility/passive'))
);
//main/rewards/nobility/chest
const NobilityChestPhase = Loader(
  lazy(() => import('src/content/main/reward/nobility/chest'))
);
//main/rewards/nobility/surprise
const RewardSurprise = Loader(
  lazy(() => import('src/content/main/reward/surprise'))
);
//main/rewards/nobility/quest
const RewardQuest = Loader(lazy(() => import('src/content/main/reward/quest')));
//main/achievement
const MainAchievement = Loader(
  lazy(() => import('src/content/main/achievement'))
);
//main/achievement/distribution
const AchieveDistribution = Loader(
  lazy(() => import('src/content/main/achievement/quest-distribution'))
);
//main/smart
const MainSmart = Loader(lazy(() => import('src/content/main/smart-army')));
//main/golden
const MainGolden = Loader(lazy(() => import('src/content/main/golden-tree')));
//main/smt
const MainSmt = Loader(lazy(() => import('src/content/main/smt')));
//main/smt/getSmt
const GetSmt = Loader(lazy(() => import('src/content/main/smt/get-smt')));
//main/smt/getSmt/detail
const GetSmtDetail = Loader(
  lazy(() => import('src/content/main/smt/get-smt/GetSmtDetail'))
);
//main/smt/getSmtc
const GetSmtc = Loader(lazy(() => import('src/content/main/smt/get-smt-cash')));
//main/legal
const MainLegal = Loader(lazy(() => import('src/content/main/legal')));
//main/message
const MainMessage = Loader(lazy(() => import('src/content/main/message')));
//main/message/detail
const MessageDetail = Loader(
  lazy(() => import('src/content/main/message/Detail'))
);

/********************  WEALTH COMPONENTS *******************/
//wealth/dashboard
const WealthDashboard = Loader(
  lazy(() => import('src/content/wealth/dashboard'))
);
//wealth/tools
const WealthTools = Loader(lazy(() => import('src/content/wealth/tools')));
//wealth/team
const WealthTeam = Loader(
  lazy(() => import('src/content/wealth/team-management'))
);
//wealth/team/general
const TeamGeneral = Loader(
  lazy(() => import('src/content/wealth/team-management/general'))
);
//wealth/team/general/detail
const GeneralDetail = Loader(
  lazy(() => import('src/content/wealth/team-management/general/detail'))
);
//wealth/team/general/member
const GeneralMember = Loader(
  lazy(() => import('src/content/wealth/team-management/general/member'))
);
//wealth/team/direct
const DirectSales = Loader(
  lazy(() => import('src/content/wealth/team-management/direct-sales'))
);
//wealth/team/direct/detail
const DirectDetail = Loader(
  lazy(() => import('src/content/wealth/team-management/direct-sales/detail'))
);

/********************  STATUS COMPONENTS *******************/
//status
const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  // STATUS MENU ROUTER
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: 'status',
        children: [
          {
            index: true,
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  // INITIAL MENU ROUTER (/)
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="main/dashboard" replace />
      }
    ]
  },
  // MAIN MENU ROUTER
  {
    path: 'main',
    element: <SidebarLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <MainDashboard />
      },
      {
        path: 'rewards',
        element: <MainReward />
      },
      {
        path: 'rewards/daily-farming',
        element: <RewardDailyFarming />
      },
      {
        path: 'rewards/nobility',
        element: <RewardNobilityReward />
      },
      {
        path: 'rewards/nobility/golden',
        element: <NobilityGoldenPhase />
      },
      {
        path: 'rewards/nobility/passive',
        element: <NobilityPassivePhase />
      },
      {
        path: 'rewards/nobility/chest',
        element: <NobilityChestPhase />
      },
      {
        path: 'rewards/surprise',
        element: <RewardSurprise />
      },
      {
        path: 'rewards/tree-phase',
        element: <NobilityGoldenPhase />
      },
      {
        path: 'rewards/quest',
        element: <RewardQuest />
      },
      {
        path: 'achievement',
        element: <MainAchievement />
      },
      {
        path: 'achievement/distribution',
        element: <AchieveDistribution />
      },
      {
        path: 'smart',
        element: <MainSmart />
      },
      {
        path: 'golden',
        element: <MainGolden />
      },
      {
        path: 'smt',
        element: <MainSmt />
      },
      {
        path: 'smt/getSmt',
        element: <GetSmt />
      },
      {
        path: 'smt/getSmt/detail',
        element: <GetSmtDetail />
      },
      {
        path: 'smt/getSmtc',
        element: <GetSmtc />
      },
      {
        path: 'messages',
        element: <MainMessage />
      },
      {
        path: 'messages/detail',
        element: <MessageDetail />
      },
      {
        path: 'legal',
        element: <MainLegal />
      }
    ]
  },
  // WEALTH MENU ROUTER
  {
    path: 'wealth',
    element: <SidebarLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <WealthDashboard />
      },
      {
        path: 'team',
        element: <WealthTeam />
      },
      {
        path: 'team/general',
        element: <TeamGeneral />
      },
      {
        path: 'team/general/detail/:address/:level',
        element: <GeneralDetail />
      },
      {
        path: 'team/general/member/:address/:level',
        element: <GeneralMember />
      },
      {
        path: 'team/direct',
        element: <DirectSales />
      },
      {
        path: 'team/direct/detail/:address/:level',
        element: <DirectDetail />
      },
      {
        path: 'tools',
        element: <WealthTools />
      },
      {
        path: 'history_notyet',
        element: <MainSmt />
      }
    ]
  }
];

export default routes;
