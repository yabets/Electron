/* global document */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion/react/theming';

import 'normalize.css';
import '@app/static/icoMoon/style.scss';
import '@app/scss/wolf-cola.scss';

import store from '@app/redux/store';
import { lightTheme, darkTheme } from '@app/config/theme';

import DJKhaled from '@app/component/hoc/DJKhaled';

import HomeContainer from '@app/component/container/HomeContainer';
import SettingContainer from '@app/component/container/SettingContainer';
import ControlContainer from '@app/component/container/ControlContainer';
import FeaturedContainer from '@app/component/container/FeaturedContainer';
import ArtistContainer from '@app/component/container/ArtistContainer';
import RecentContainer from '@app/component/container/RecentContainer';
import SurpriseContainer  from '@app/component/container/SurpriseContainer';
import TopContainer from '@app/component/container/TopContainer';
import SearchContainer from '@app/component/container/SearchContainer';

import Spinner from '@app/component/presentational/Spinner';
import Mobile from '@app/component/presentational/Mobile';

import { WolfColaContainer, WindowDrag, NavListContainer, NavContainer, RouteContainer } from '@app/component/styled/WolfCola';
import Divider from '@app/component/styled/Divider';
import { NavLinkStyled } from '@app/component/styled/ReactRouter';

const WolfCola = DJKhaled('loading', 'theme')(({ loading, theme }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <WolfColaContainer>
          <WindowDrag />

          <NavListContainer>
            <NavContainer>
              <Link className="brand" to="/">
                <img src="static/image/brand.png" className="brand-image" alt="ArifZefen" />
                <span>ArifZefen</span>
                <Spinner loading={loading} />
              </Link>

              <div className="nav-list">
                <NavLinkStyled to="/search">
                  <span>Search</span>
                  <i className="icon-ion-ios-search-strong" style={{ float: 'right' }} />
                </NavLinkStyled>
                <NavLinkStyled to="/top">Top Songs</NavLinkStyled>
                <NavLinkStyled to="/genre">Genre</NavLinkStyled>
                <NavLinkStyled to="/ariflist">ArifList</NavLinkStyled>
                <NavLinkStyled to="/surprise">Surprise Me</NavLinkStyled>

                <small className="small-text">YOUR MUSIC</small>
                <Divider />

                <NavLinkStyled to="/recent">Recently Played</NavLinkStyled>
                <NavLinkStyled to="/songs">Songs</NavLinkStyled>

                <small className="small-text">YOUR PLAYLISTS</small>
                <Divider />

                <NavLinkStyled to="/playlist/ላሽ-ላሽ">ላሽ ላሽ</NavLinkStyled>
                <NavLinkStyled to="/playlist/Hip-Hop">Hip-Hop</NavLinkStyled>

                <small className="small-text">SETTINGS</small>
                <Divider />

                <NavLinkStyled to="/setting">Settings</NavLinkStyled>
                <div style={{ paddingBottom: '2em' }} />
              </div>
            </NavContainer>

            <RouteContainer>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/featured/:id" component={FeaturedContainer} />
              <Route path="/artist/:id" component={ArtistContainer} />
              <Route path="/search" component={SearchContainer} />
              <Route path="/top/:category?" component={TopContainer} />
              <Route path="/surprise" component={SurpriseContainer} />
              <Route path="/recent" component={RecentContainer} />
              <Route path="/setting" component={SettingContainer} />
            </RouteContainer>
          </NavListContainer>

          <ControlContainer />

          <Mobile />
        </WolfColaContainer>
      </Router>
    </ThemeProvider>
  </Provider>
));

render(<WolfCola />, document.querySelector('#wolf-cola'));
