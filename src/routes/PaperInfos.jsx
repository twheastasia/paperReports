import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './PaperInfos.less';

function PaperInfos ({location, dispath, paper}){

	return (
		<MainLayout location={location}>
			<div>
				<h1>paper infos</h1>
			</div>
		</MainLayout>
	);
}

PaperInfos.propTypes = {
	paper: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapStateProps({paper}){
	return {paper};
}

export default connect(mapStateProps)(PaperInfos);