import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    key = (key == "exam_details" ? "exam_lists" : key);
    /* eslint no-empty:0 */
  } catch (e) {}
  return key;
}

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="exam_lists">
        <Link to="/exam_lists"><Icon type="bars" />考试列表</Link>
      </Menu.Item>
      <Menu.Item key="paper_infos">
        <Link to="/paper_infos"><Icon type="file-text" />管理试卷信息</Link>
      </Menu.Item>
      <Menu.Item key="student_infos">
        <Link to="/student_infos"><Icon type="user" />管理学生信息</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/settings"><Icon type="setting" />设置</Link>
      </Menu.Item>
    </Menu>
  );
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
