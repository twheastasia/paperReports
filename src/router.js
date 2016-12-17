import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExamLists from './routes/ExamLists';
import PaperInfos from './routes/PaperInfos';
import StudentInfos from './routes/StudentInfos';
import Settings from './routes/Settings';
import ExamDetails from './routes/ExamDetails';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/exam_lists" component={ExamLists} />
      <Route path="/paper_infos" component={PaperInfos} />
      <Route path="/student_infos" component={StudentInfos} />
      <Route path="/settings" component={Settings} />
      <Route path="/exam_details" component={ExamDetails} />
    </Router>
  );
};
