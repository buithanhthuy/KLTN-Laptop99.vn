import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import callApi from '../../utils/apiCaller';
let token;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  async componentDidMount() {
    token = localStorage.getItem('_auth');
    if (token) {
      const res = await callApi('users/me', 'GET', null, token);
      if (res && res.status === 200) {
        this.setState({
          user: res.data.results
        })
      }
    } else {
      this.setState({
        redirect: true
      })    
    }
  }

  render() {
    const { nameRole } = this.props;
    const { user } = this.state;
    const newUser = user && user.length ? user[0] : null
    return (
      <nav className="side-navbar">
        {/* Sidebar Header*/}
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar"><img src={newUser && newUser.avatar ? newUser.avatar : 'https://i.ibb.co/NCdx7FF/avatar-Default.png'} alt="notfound" className="img-fluid rounded-circle" /></div>
          <div className="title">
            <h1 className="h4">{newUser && newUser.name ? newUser.name : null}</h1>
            <p><b style={{fontWeight: 600}}>{newUser ? newUser.role.nameRole : null}</b></p>
          </div>
        </div>
        {/* Sidebar Navidation Menus*/}
        <span className="heading">quyền quản lý chính</span>
        {(nameRole === 'superadmin' || nameRole === 'admin') ?
          <ul className="list-unstyled">
            <li><Link to="/"> <i className="icon-home" />Kho hàng </Link></li>
            <li><Link to="/orders"> <i className="icon icon-bill" />Quản lý đơn hàng</Link></li>
            <li><Link to="/categories"> <i className="icon-interface-windows" />Quản lý nhóm hàng </Link></li>
            <li><Link to="/products"> <i className="icon icon-website" />Quản lý các mặt hàng</Link></li>
            <li><Link to="/producers"> <i className="icon icon-list-1" />Nhà cung cấp</Link></li>
            {/* <li><Link to="/discounts"> <i className="icon icon-check" />Discount</Link></li> */}
            <li><Link to="/ratings">  <i className="icon icon-check" />Đánh giá</Link></li>
            <li><Link to="/users"> <i className="icon icon-user" />Quản lý người dùng</Link></li>
            <li><Link to="/roles"> <i className="icon icon-bars" />Phân quyền người dùng</Link></li>
            <li> <Link to="/contacts"> <i className="icon-mail" />Liên lạc tương tác </Link></li>
          </ul>
          :
          <ul className="list-unstyled">
            <li><Link to="/"> <i className="icon-home" />Kho hàng </Link></li>
            <li><Link to="/orders"> <i className="icon icon-bill" />Quản lý đơn hàng </Link></li>
          </ul>
        }
        <span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li> <Link to="/"> <i className="icon-screen" />Thông tin về cửa hàng </Link></li>
          <li> <Link to="/"> <i className="icon-flask" />Trợ giúp </Link></li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nameRole: state.nameRole,
  }
}

export default connect(mapStateToProps, null)(NavBar)