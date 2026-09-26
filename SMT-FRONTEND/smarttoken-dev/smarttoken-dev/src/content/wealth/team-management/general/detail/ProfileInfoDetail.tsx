import BadgeSection from './BadgeSection';
import LinkSection from './LinkSection';
import StatusSection from './StatusSection';
import ColumnBox from 'src/components/Box/ColumnBox';

const ProfileInfoDetail = ({ userAccount }) => {
  return (
    <ColumnBox>
      {/* FIRST SECTION */}
      <BadgeSection />

      {/* SECOND SECTION */}
      <LinkSection userAccount={userAccount} />

      {/* THIRD SECTION */}
      <StatusSection userAccount={userAccount} />
    </ColumnBox>
  );
};

export default ProfileInfoDetail;
