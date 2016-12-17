import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './ExamDetails.less';
import Breadcrumb from '../components/MainLayout/BreadCrumb';

function ExamDetails ({location, dispath, exam_details}){

	// const {details} = exam_details;

	return (
		<MainLayout location={location}>
			<Breadcrumb routes={"exams_details"} />
			<div>
				<h1>exam_details</h1>
			</div>
		</MainLayout>
	);
}

ExamDetails.propTypes = {
	exam_details: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapStateProps({exam_details}){
	return {exam_details};
}

export default connect(mapStateProps)(ExamDetails);