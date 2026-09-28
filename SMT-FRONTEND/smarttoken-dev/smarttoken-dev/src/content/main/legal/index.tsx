import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import CustomCard from 'src/components/Card';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },

  // CARD BOX PADDING
  CardBoxPadding: {
    padding: '50px 80px',
    '@media (max-width: 968px)': {
      padding: '20px'
    }
  },

  // CUSTOME WIDHT OF LEVEL STYLE
  customButtonGroupStyle: {
    width: '680px',
    marginBottom: '30px'
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
  }
}));

const LegalButton = styled(Button)({
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  borderRadius: '50px',
  border: '2px solid #323232',
  width: '160px',
  height: '30px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#E8B500',
  transition: 'all .25s ease',
  '&:hover': {
    background: 'linear-gradient(180deg, #FFCB00 0%, #936900 100%)',
    color: '#212121'
  },
  '&.legal-active': {
    border: '2px solid #E0A501',
    color: '#FFCB00',
    boxShadow: '0 0 14px rgba(224, 165, 1, 0.35)'
  }
});

interface LegalSection {
  key: string;
  label: string;
  title: string;
  paragraphs: string[];
}

const sections: LegalSection[] = [
  {
    key: 'information',
    label: 'Information',
    title: 'About Smart Ecosystem',
    paragraphs: [
      'Smart Ecosystem is a fully on-chain rewards ecosystem running on BNB Smart Chain (BSC). The platform is composed of 10 upgradeable smart contracts covering the SMT and SMTC tokens, licenses (Smart Army), daily farming, the referral ladder, nobility achievements and the Golden Tree pool. All balances, rewards and ownership records live on-chain and can be verified on BscScan at any time.',
      'This application is the user interface to those contracts. It does not hold your funds and cannot move assets on your behalf: every transaction is signed from your own wallet. Without a connected wallet, the app runs in read-only mode and certain values are shown as demo placeholders.',
      'Nothing on this page constitutes financial advice. Digital assets are volatile and you may lose part or all of your funds. Always do your own research before purchasing licenses or tokens.'
    ]
  },
  {
    key: 'tos',
    label: 'Term of Service',
    title: 'Terms of Service',
    paragraphs: [
      'By connecting a wallet and using Smart Ecosystem you agree to use the platform at your own risk and in compliance with the laws of your jurisdiction. You are solely responsible for the security of your wallet, seed phrase and private keys.',
      'License purchases (Smart Army) and reward mechanics operate through smart contracts. Once a transaction is confirmed on-chain it is final and cannot be reversed by the team. Reward amounts, tax rates and pool distributions are determined by the contract logic described in the on-chain code.',
      'The team may upgrade the contracts through the UUPS proxy mechanism to fix bugs or improve the system. Material changes will be announced through the in-app Messages page and official community channels.'
    ]
  },
  {
    key: 'privacy',
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    paragraphs: [
      'Smart Ecosystem does not run KYC and does not collect your name, email or identity documents. The data the application stores is limited to what is required to operate: your public wallet address, locally stored preferences (such as sidebar and connection settings) in your browser, and the on-chain transaction history that is public by nature.',
      'If you opt in to analytics or error tracking (Sentry), anonymised technical data such as error messages and browser type may be collected to improve stability. This optional service is disabled unless a tracking key is configured by the operator.',
      'We never sell personal data. Blockchain data is public: anyone, including us, can read the transactions associated with your address.'
    ]
  },
  {
    key: 'disclaimer',
    label: 'Disclaimer',
    title: 'Risk Disclaimer',
    paragraphs: [
      'SMT and SMTC are utility tokens of the ecosystem. Their market price can go down as well as up, and liquidity may be limited. Nothing in this application guarantees future value, profit or returns.',
      'Smart contract risk exists even though the contracts follow battle-tested OpenZeppelin upgradeable patterns. Audit results and dependency status are documented in the project docs folder. Never invest more than you can afford to lose.',
      'Participation in farming, licenses, quests and the Golden Tree pool may be restricted in some jurisdictions. It is your responsibility to verify that using this platform is legal where you live.'
    ]
  }
];

const Legal = () => {
  const classes = useStyles();
  const [active, setActive] = useState<string>('information');

  const current = sections.find((s) => s.key === active) || sections[0];

  return (
    <>
      <Helmet>
        <title>Main | Legal Agreement</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          <Grid item xs={12} className={classes.customScrollStyle}>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.customButtonGroupStyle}
            >
              {sections.map((section) => (
                <LegalButton
                  key={section.key}
                  className={section.key === active ? 'legal-active hover-press' : 'hover-press'}
                  onClick={() => setActive(section.key)}
                >
                  {section.label}
                </LegalButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CustomCard width={'100%'} height={'auto'} borderRadius={'20px'}>
              <Box
                key={current.key}
                className={classes.CardBoxPadding + ' animate-fade-in'}
              >
                <Typography
                  variant="h2"
                  marginBottom="24px"
                  color="#E0A501"
                  fontWeight="700"
                >
                  {current.title}
                </Typography>
                {current.paragraphs.map((paragraph, idx) => (
                  <Typography
                    key={idx}
                    marginBottom="20px"
                    fontSize="18px"
                    color="#EDEDED"
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Legal;
