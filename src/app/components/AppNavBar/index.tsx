import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Avatar, Dropdown, Button, Drawer } from 'antd';
import { useWindowWidth } from '@react-hook/window-size';
import { SearchOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectedIsMobileMenu,
  selectedMobileMenuOpen,
  selectDrawerTab,
  selectIsAuth,
} from 'app/appFeatures/selectors';
import { AppFeaturesAction as actions } from 'app/appFeatures';

// https://medium.com/@stroppolo.daniel/adding-a-responsive-header-to-react-ant-design-24b8e052893d

const AppNavBar = props => {
  const isMobileMenu = useSelector(selectedIsMobileMenu);
  const mobileMenuOpen = useSelector(selectedMobileMenuOpen);
  const drawerTab = useSelector(selectDrawerTab);
  const isAuth = useSelector(selectIsAuth);
  const onlyWidth = useWindowWidth();
  const dispatch = useDispatch();

  const renderNavLinks = () => {
    return [
      <Menu.Item key={1}>
        {/* <Link> */}
        Web menu
        {/* </Link> */}
      </Menu.Item>,
      isMobileMenu && (
        <Menu.Item key={100}>
          <Link onClick={() => {}} to={'/home'}>
            Sign out
          </Link>
        </Menu.Item>
      ),
    ];
  };

  const renderDesktopNavbar = () => {
    dispatch(actions.setIsMobileMenu(onlyWidth));
    return renderNavLinks();
  };
  const renderMobileNavbar = () => {
    dispatch(actions.setIsMobileMenu(onlyWidth));
    return isAuth ? '' : renderNavLinks();
  };

  const RenderUserLinks = () => {
    return isMobileMenu ? (
      <Button
        onClick={toggleDrawer}
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
      />
    ) : (
      <Avatar src="" />
    );
  };

  const toggleDrawer = () => {
    console.log('onClose');
    dispatch(actions.toggleMobileMenuOpen());
  };
  return (
    <>
      <Drawer
        title="System"
        placement="left"
        closable={false}
        onClose={toggleDrawer}
        visible={mobileMenuOpen}
      >
        <Menu> Test </Menu>
      </Drawer>
      <Layout.Header>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          selectedKeys={[drawerTab.toString()]}
        >
          {onlyWidth >= 768 ? renderDesktopNavbar() : renderMobileNavbar()}
          {isAuth && <RenderUserLinks />}
        </Menu>
      </Layout.Header>
    </>
  );
};

export default AppNavBar;
