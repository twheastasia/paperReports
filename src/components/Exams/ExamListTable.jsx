import React, {Component, PropTypes} from 'react';
import {Table, message, Popconfirm, Pagination } from 'antd';
import styles from './ExamListTable.less';

const ExamListTable = ({
	  total,
  	current,
  	loading,
  	dataSource,
  	onDeleteItem,
  	onEditItem,
  	onPageChange,
}) => {
	const colums = [
    {
      title: "学生姓名",
      dataIndex: "student_name",
      key: "student_name",
      render: (text, record) => <a href={'/#/exam_details?id='+record.id}>{text}</a>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '考试名称',
      dataIndex: 'exam_name',
      key: 'exam_name'
    },
    {
    	title: "得分",
    	dataIndex: 'scores',
    	key: "scores"
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <p>
          <a onClick={() => onEditItem(record)}>编辑</a>
          &nbsp;
          <Popconfirm title="确定要删除吗?" onConfirm={()=>onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </p>
      )
    }
  	];

  	return (
  		<div className={styles.normal}>
      		<Table columns={colums} dataSource={dataSource} loading={loading} key={record => record.id} pagination={false}/>
      		<Pagination
		        className="ant-table-pagination"
		        total={total}
		        current={current}
		        pageSize={10}
		        onChange={onPageChange}
	      	/>
	    </div>

  	);
};

ExamListTable.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  total: PropTypes.any,
  current: PropTypes.any,
};

export default ExamListTable;
