import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Examlists.less';
import Breadcrumb from '../components/MainLayout/BreadCrumb';

function Examlists ({location, dispath, exams}){

	return (
		<MainLayout location={location}>
			<Breadcrumb routes={"exams"} />
			<div>
				<h1>examlists</h1>
			</div>
		</MainLayout>
	);
}

Examlists.propTypes = {
	exams: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapStateProps({exams}){
	return {exams};
}

export default connect(mapStateProps)(Examlists);