/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import CloseButton from '../../components/CloseButton';
import Blur from '../../components/Blur';
import Quiz from '../../components/Quiz';
import {
  App,
  Container,
  CloseContainer,
  BlurSection,
  QuizSection,
} from './styled';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [closeAnimation, setCloseAnimation] = useState(null);

  // useEffect(() => { }, []);

  useEffect(() => {
    if (closeAnimation && closeAnimation !== 'open') {
      console.log(closeAnimation);
    }
    if (closeAnimation === 'close') {
      const anim = document.getElementById('animation');
      anim.classList.toggle('exit');
      anim.onanimationend = evt => (evt.target.style.right = '-100vw');
    }
  }, [closeAnimation]);

  return (
    <App>
      <Container
        id="animation"
        onAnimationEnd={() => setCloseAnimation('open')}
      >
        <CloseContainer>
          <CloseButton closeAnimation={() => setCloseAnimation('close')} />
        </CloseContainer>
        <BlurSection onClick={() => window.open('http://www.google.it')}>
          <Blur />
        </BlurSection>
        <QuizSection onClick={() => window.open('http://www.google.it')}>
          <Quiz />
        </QuizSection>
      </Container>
    </App>
  );
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
