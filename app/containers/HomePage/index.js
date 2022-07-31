/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
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
import CloseButton from './components/CloseButton';
import Blur from './components/Blur';
import Quiz from './components/Quiz';
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

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [closeAnimation, setCloseAnimation] = useState(null);

  useEffect(() => { }, []);

  useEffect(() => {
    if (closeAnimation && closeAnimation !== 'open') {
      console.log(closeAnimation);
    }
    if (closeAnimation === 'close') {
      const anim = document.getElementById("animation");
      anim.classList.toggle("exit");
      anim.onanimationend = (evt => evt.target.style.right = '-100vw')
    }
  }, [closeAnimation]);

  return (
    <div id="app">
      <div id="animation" className="container" onAnimationEnd={() => setCloseAnimation('open')}>
        <div className="closeContainer" >
          <CloseButton closeAnimation={() => setCloseAnimation('close')} />
        </div>
        <div className="blurSection" onClick={() => window.open("http://www.google.it")}>
          <Blur />
        </div>
        <div className="quizSection" onClick={() => window.open("http://www.google.it")}>
          <Quiz />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

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
