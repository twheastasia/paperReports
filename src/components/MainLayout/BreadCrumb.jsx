import React, { PropTypes } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';

function BreadCrumb({routes}){

	return (
		<Breadcrumb>
		    <Breadcrumb.Item><a href="/#/exam_lists">Exam Lists</a></Breadcrumb.Item>
		    <Breadcrumb.Item>{routes}</Breadcrumb.Item>
		</Breadcrumb>
	);
	// return <Breadcrumb itemRender={itemRender} />;
}

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

BreadCrumb.propTypes = {
  routes: PropTypes.Object,
};

export default BreadCrumb;