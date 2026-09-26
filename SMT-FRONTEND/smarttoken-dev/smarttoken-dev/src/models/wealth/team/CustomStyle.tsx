import { makeStyles } from '@mui/styles';

/** Team Management Style */
export const TeamManagementStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 20px 60px 20px !important',
    '@media (max-width: 1280px)': {
      padding: '30px !important'
    }
  },

  // CONTENT SCROLLING
  contentScrollStyle: {
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '5px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid #323232',
      cursor: 'pointer',
      borderRadius: '10px'
    },

    '@media (max-width: 1280px)': {
      marginRight: '10px'
    }
  },
  // CONTENT PADDING STYLE
  contentPaddingStyle: {
    height: '600px',
    '@media (max-width: 1400px)': {
      padding: '0px 5px'
    }
  },
  // HEADING TITLE CUSTOM STYLE
  headingTitleStyle: {
    color: '#E0A501 !important',
    fontSize: '24px !important',
    height: '29px',
    lineHeight: '100%',
    fontWeight: '700 !important',
    marginLeft: '20px !important',
    '@media (max-width: 968px)': {
      marginLeft: '0px !important'
    }
  }
});

/** Team management - general */
export const TeamGeneralStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 60px 50px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // CUSTOME WIDHT OF LEVEL STYLE
  customLevelStyle: {
    width: '1020px',
    '@media (max-width: 1280px)': {
      width: '1239px'
    },
    '@media (max-width: 1024px)': {
      width: '984px'
    },
    '@media (max-width: 600px)': {
      width: '700px'
    }
  },
  // CUSTOM SCROLL STYLE
  customScrollStyle: {
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '5px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid #323232',
      cursor: 'pointer',
      borderRadius: '10px'
    }
  },
  // SORT BY CUSTOM STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '270px',
    height: '32px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      width: '200px'
    }
  },
  // TITLE GROUP GRID STYLE
  titleGroupGridStyle: {
    marginRight: '100px !important',
    '@media (max-width: 968px)': {
      marginRight: '0px !important'
    }
  },
  // TITLE GROUP BOX STYLE
  titleGroupBoxStyle: {
    height: '20px',
    width: '100%',
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  },
  // CONTAINER CUSTOM STYLE
  regiDateStyle: {
    color: '#EDEDED',
    padding: '0 47px',
    width: '180px',
    margin: '0 auto',
    '@media (max-width: 968px)': {
      width: 'auto',
      padding: '0'
    }
  },
  // CUSTOM NOBILITY STYLE
  customNobilityStyle: {
    '@media (min-width: 968px)': {
      height: '46px',
      width: '150px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center'
    },
    alignItems: 'center',
    margin: '0 auto',
    display: 'flex'
  },
  // CUSTOM NOBILITY IMAGE STYLE
  customNobilityImageStyle: {
    '@media (max-width: 968px)': {
      width: '30px',
      height: '30px'
    }
  },
  // CUSTOM NOBILITY TITLE STYLE
  customNobilityTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    },
    marginLeft: '17px !important'
  },
  // CUSTOM ACTION STYLE
  customActionStyle: {
    '@media (min-width: 968px)': {
      display: 'flex',
      width: '66px',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // CUSTOM ACTION BUTTON STYLE
  customActionButtonStyle: {
    '@media (max-width: 968px)': {
      width: '20px',
      height: '20px',
      border: '1px solid #EDEDED',
      borderRadius: '50%',
      background: '#EDEDED',
      color: '#000',
      cursor: 'pointer'
    },
    width: '28px',
    height: '28px',
    border: '1px solid #EDEDED',
    borderRadius: '50%',
    background: '#EDEDED',
    color: '#000',
    cursor: 'pointer'
  },
  // CUSTOM AVATAR STYLE
  customAvatarStyle: {
    '@media (max-width: 968px)': {
      width: '30px !important',
      height: '30px !important',
      margin: '0 auto'
    },
    width: '50px',
    height: '50px',
    margin: '0 auto',
    borderRadius: '50%'
  }
});
// general profile detail
export const ProfileInfoStyle = makeStyles({
  // CUSTOM BOX STYLE
  customBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (max-width: 968px)': {
      flexDirection: 'row',
      marginTop: '10px'
    }
  },
  // CUSTOM INNER BOX STYLE
  customInnerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '30px',
    position: 'relative',
    '@media (max-width: 968px)': {
      width: '50%',
      padding: '0 10px'
    }
  },
  // CUSTOM NOT BOX STYLE
  customnNoteBoxStyle: {
    '@media (max-width: 968px)': {
      marginTop: '10px',
      marginBottom: '20px',
      position: 'relative'
    }
  }
});

/** Team management - direct sale */
export const DirectSaleStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 60px 50px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // CUSTOME WIDHT OF LEVEL STYLE
  customLevelStyle: {
    width: '1020px',
    '@media (max-width: 1280px)': {
      width: '1239px'
    },
    '@media (max-width: 1024px)': {
      width: '984px'
    },
    '@media (max-width: 600px)': {
      width: '700px'
    }
  },
  // CUSTOM SCROLL STYLE
  customScrollStyle: {
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '5px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid #323232',
      cursor: 'pointer',
      borderRadius: '10px'
    }
  },
  // SORT BY CUSTOME STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },
  // CUSTOM SEARCH BAR STYLE
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '270px',
    height: '32px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      width: '200px'
    }
  }
});
// direct details
export const DirectDetailStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 60px 50px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // CUSTOME WIDHT OF LEVEL STYLE
  customLevelStyle: {
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      marginBottom: '20px'
    }
  },

  // SORT BUTTON BOX STYLE
  sortButtonBoxStyle: {
    '@media (min-width: 968px)': {
      marginTop: '-50px'
    }
  },
  // SORT BY CUSTOME STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },

  // TITLE GROUP STYLE
  titleGroupStyle: {
    marginRight: '100px !important',
    '@media (max-width: 1024px)': {
      marginRight: '0px !important'
    }
  }
});
