import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './ExamDetails.less';
import Breadcrumb from '../components/MainLayout/BreadCrumb';
import ExamDetailView from '../components/Exams/ExamDetailView';

function ExamDetails ({location, dispath, exam_details}){



	const ExamDetailsProps = {
		details :{
		      "id" : 1,
		      "category": "English",
		      "exam_name": "exam2",
		      "student_name": "小m",
		      "scores": "99",
		      "age": "6",
		      "skills": [
		          {
		              "name": "jineng10",
		              "judgement": "5"
		          },
		          {
		              "name": "jineng12",
		              "judgement": "4"
		          },
		          {
		              "name": "jineng23",
		              "judgement": "5"
		          },
		          {
		              "name": "jineng43",
		              "judgement": "3"
		          }
		      ],
		      "comment": "继续努力，继续努力，还有进步的空间，还有上升的余地！不要放弃!"
		  }
		
	}

	return (
		<MainLayout location={location}>
			<Breadcrumb routes={"exams_details"} />
			<div>
				<ExamDetailView {...ExamDetailsProps} />
			</div>
		</MainLayout>
	);
}

ExamDetails.propTypes = {
	exam_details: PropTypes.object,
  	location: PropTypes.object,
  	dispatch: PropTypes.func,
};

function mapExamsStateProps({exam_details}){
	return {exam_details};
}

export default connect(mapExamsStateProps)(ExamDetails);