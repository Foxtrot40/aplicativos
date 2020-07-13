import React from 'react';
import {
  Container,
  FilterButton,
  FilterButtonTitle,
  FilterButtonNewReleasesIcon,
  FilterButtonTrendingIcon,
} from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'movies/src/screens/Home/actions';
import { scale } from 'react-native-size-matters';

const Filters = ({
  showTrending,
  showNewReleases,
  setShowTrending,
  setShowNewReleases,
}) => (
  <Container>
    <FilterButton
      testID="trendingButton"
      activeOpacity={0.6}
      isFilterDisabled={showTrending}
      onPress={setShowTrending}>
      <FilterButtonTrendingIcon
        testID="trendingIcon"
        name="ios-trending-up"
        size={scale(20)}
        color={showTrending ? 'black' : 'white'}
      />
      <FilterButtonTitle filterDisabled={showTrending}>
        Trending
      </FilterButtonTitle>
    </FilterButton>
    <FilterButton
      testID="newReleasesButton"
      activeOpacity={0.6}
      isFilterDisabled={showNewReleases}
      onPress={setShowNewReleases}>
      <FilterButtonNewReleasesIcon
        testID="newReleasesIcon"
        name="new-releases"
        size={scale(20)}
        color={showNewReleases ? 'black' : 'white'}
      />
      <FilterButtonTitle filterDisabled={showNewReleases}>
        Releases
      </FilterButtonTitle>
    </FilterButton>
  </Container>
);

const mapStateToProps = ({ home: { showTrending, showNewReleases } }) => ({
  showTrending,
  showNewReleases,
});

const mapDispatchToProps = dispatch => {
  const { setShowNewReleases, setShowTrending } = actions;

  return bindActionCreators(
    {
      setShowTrending,
      setShowNewReleases,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
