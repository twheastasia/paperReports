import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './StudentInfos.less';

function StudentInfos ({location, dispath, student}){

	return (
		<MainLayout location={location}>
			<div>
				<h1>student infos</h1>
			</div>
		</MainLayout>
	);
}

StudentInfos.propTypes = {
	student: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapStateProps({student}){
	return {student};
}

export default connect(mapStateProps)(StudentInfos);