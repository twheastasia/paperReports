import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Settings.less';

function Settings ({location, dispath, settings}){

	return (
		<MainLayout location={location}>
			<div>
				<h1>settings</h1>
			</div>
		</MainLayout>
	);
}

Settings.propTypes = {
	settings: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapStateProps({student}){
	return {student};
}

export default connect(mapStateProps)(Settings);