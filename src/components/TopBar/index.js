import React from 'react';
import { useHistory } from 'react-router';
import PrevArrowIcon from 'assets/Icons/PrevArrowIcon';
import NextArrowIcon from 'assets/Icons/NextArrowIcon';
import {
  StyledTopBar,
  RoundButtonsWrapper,
  RoundButton,
  UserProfileWrapper,
  UserProfileButton,
  ImageWrapper,
  UserName,
} from './style';
import { getUserProfile } from 'services/spotifyApi/endpoints';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useFetchStorage } from 'hooks/useFetchStorage';

const TopBar = ({ token }) => {
  // const [user, setUser] = useState();
  const history = useHistory();
  const handleBackClick = () => history.goBack();
  const handleNextClick = () => history.goForward();
  const isTablet = useMediaQuery('(max-width: 1000px');

  const user = useFetchStorage(
    token, getUserProfile, 'user-profile'
  );

  // useEffect(() => {
  //   getUserProfile(token).then(res => setUser(res.data));
  // }, [token]);

  if (!user) return null;
  return (
    <StyledTopBar>
      <RoundButtonsWrapper>
        <RoundButton onClick={() => handleBackClick()}>
          <PrevArrowIcon />
        </RoundButton>
        {!isTablet && (
          <RoundButton onClick={() => handleNextClick()}>
            <NextArrowIcon />
          </RoundButton>
        )}
      </RoundButtonsWrapper>

      <UserProfileWrapper>
        <UserProfileButton>
          <ImageWrapper>
            <img src={user.images[0].url} alt={user.name} />
          </ImageWrapper>
          {!isTablet && <UserName>{user.display_name}</UserName>}
        </UserProfileButton>
      </UserProfileWrapper>
    </StyledTopBar>
  );
};

export default TopBar;
