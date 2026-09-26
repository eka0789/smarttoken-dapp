import { ListSubheader, List } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';
import { styled } from '@mui/material/styles';

const MenuWrapper = styled(List)(
  ({ theme }) => `
    padding: 0 0;
    width: 100%;

    & > .MuiList-root {
      padding: 0 ${theme.spacing(2)} ${theme.spacing(2)};
    }
    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.sidebar.menuItemHeadingColor};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(List)(
  ({ theme }) => `
    &.MuiList-root {
      padding: 0px 30px !important;

      .MuiList-root .MuiList-root .MuiListItem-root .MuiButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 7px ${theme.spacing(1)};

        .MuiButton-root {
          display: flex;
          color: #EDEDED;
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: 600;
          padding-top: ${theme.spacing(0.8)};
          padding-bottom: ${theme.spacing(0.8)};
          position: relative;
          border-radius: 10px;
          transition: all .3s cubic-bezier(0.22, 1, 0.36, 1);

          &::before {
            content: '';
            position: absolute;
            left: 2px;
            top: 50%;
            height: 55%;
            width: 3px;
            border-radius: 4px;
            background: linear-gradient(180deg, #FFCB00 0%, #E0A501 100%);
            box-shadow: 0 0 10px rgba(224, 165, 1, 0.8);
            transform: translateY(-50%) scaleY(0);
            transition: transform .3s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(4)};

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(9)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color', 'transform'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: ${theme.spacing(1.5)};
            color: ${theme.sidebar.menuItemIconColor};
          }

          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          &:hover {
            color: #E0A501;
            font-weight: 700;
            background-color: rgba(224, 165, 1, 0.08);
            transform: translateX(5px);

            &::before {
              transform: translateY(-50%) scaleY(1);
            }

            .MuiButton-startIcon {
              transform: scale(1.12);
              color: #FFCB00;
              filter: drop-shadow(0 0 6px rgba(224, 165, 1, 0.6));
            }

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }

          &.Mui-active {
            color: #E0A501;
            font-weight: 700;
            background-color: rgba(224, 165, 1, 0.1);
            box-shadow: inset 0 0 18px rgba(224, 165, 1, 0.07);

            &::before {
              transform: translateY(-50%) scaleY(1);
            }

            .MuiButton-startIcon {
              color: #FFCB00;
              filter: drop-shadow(0 0 6px rgba(224, 165, 1, 0.6));
            }

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              // padding: ${theme.spacing(0.5, 2, 0.5, 6.5)};
              border-radius: 8px;
              transition: all .25s ease;

              &.Mui-active,
              &:hover {
                color: #FFCB00;
                background-color: rgba(224, 165, 1, 0.1);
                transform: translateX(3px);
              }
            }
          }
        }
      }
    }
`
);

const renderSidebarMenuItems = ({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}): JSX.Element => (
  <SubMenuWrapper>
    {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
  </SubMenuWrapper>
);

const reduceChildRoutes = ({
  ev,
  path,
  item
}: {
  ev: JSX.Element[];
  path: string;
  item: MenuItem;
}): Array<JSX.Element> => {
  const key = item.name;

  const exactMatch = item.link
    ? !!matchPath(
        {
          path: item.link,
          end: true
        },
        path
      )
    : false;

  if (item.items) {
    const partialMatch = item.link
      ? !!matchPath(
          {
            path: item.link,
            end: false
          },
          path
        )
      : false;

    ev.push(
      <SidebarMenuItem
        key={key}
        active={partialMatch}
        open={partialMatch}
        name={item.name}
        icon={item.icon}
        link={item.link}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        active={exactMatch}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
};

function SidebarMenu() {
  const location = useLocation();

  return (
    <>
      {menuItems.map((section, idx) => (
        <MenuWrapper
          key={idx}
          subheader={
            <ListSubheader component="div" disableSticky>
              {section.heading}
            </ListSubheader>
          }
        >
          {renderSidebarMenuItems({
            items: section.items,
            path: location.pathname
          })}
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;
