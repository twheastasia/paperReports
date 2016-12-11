import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to PaperReports!</h1>
      <h2>
      	<a href="/#/exam_lists"><Button type="primary" style={{ marginTop: 5 }}>Go to exam lists!</Button></a>
      </h2>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
