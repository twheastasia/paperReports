import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Examlists.less';
import Breadcrumb from '../components/MainLayout/BreadCrumb';
import ExamListTable from '../components/Exams/ExamListTable';

function Examlists ({location, dispath, exams}){

	const {loading, list, total, current, currentItem, modalVisible, modalType, field, keyword} = exams;

	const ExamListProps = {
		dataSource: list,
	    total,
	    loading,
	    current,
	    onDeleteItem(id){
	      dispatch({
	        type: "exams/delete",
	        payload: id,
	      });
	    },
	    onEditItem(item) {
	      dispatch({
	        type: 'exams/showModal',
	        payload: {
	          modalType: 'update',
	          currentItem: item,
	        },
	      });
	    },
	    onPageChange(page) {
	      dispatch(routerRedux.push({
	        pathname: '/exams',
	        query: { field, keyword, page },
	      }));
	    },
	};

	// const UserModalGen = () => <UserModal {...userModalProps} />;

	return (
		<MainLayout location={location}>
			<Breadcrumb />
			<div>
				<ExamListTable {...ExamListProps}/>
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