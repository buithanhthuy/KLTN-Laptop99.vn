import React, { Component } from 'react'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <ul>
          <li><a href="index.html">Trang chủ</a></li>
          <li className="active">/Về chúng tôi</li>
        </ul>
      </div>
    </div>
  </div>
 
  <div className="about-us-wrapper pt-60 pb-40">
    <div className="container">
      <div className="row">
        {/* About Text Start */}
        <div className="col-lg-6 order-last order-lg-first">
          <div className="about-text-wrap">
            <h2><span>Cung cấp tốt nhất</span>Sản phẩm cho bạn</h2>
            <p>Với mong muốn bắt kịp các nước trong khu vực về các dòng sản phẩm công nghệ thông minh đang rất phát triển và trở nên phổ biến như laptop, PC hiện đại bắt kịp công nghệ số, các phụ kiện, linh kiện phục vụ nhu cầu sửu dụng máy tính…..Laptop99.vn đã tiên phong đi đầu trong lĩnh vực trên và từng bước giới thiệu các sản phẩm có chất lượng vào thị trường Việt Nam.</p>
            <p>Một số khách hàng của chúng tôi nói rằng họ tin tưởng chúng tôi và mua sản phẩm của chúng tôi mà không có bất kỳ sự e ngại nào bởi vì họ tin tưởng chúng tôi và luôn hài lòng khi mua sản phẩm của chúng tôi.</p>
            <p>Chúng tôi cung cấp những gì họ đã tin tưởng chúng tôi và mua sản phẩm của chúng tôi mà không có bất kỳ sự e ngại nào vì họ tin tưởng chúng tôi và luôn vui vẻ khi mua hàng.</p>
          </div>
        </div>
        {/* About Text End */}
        {/* About Image Start */}
        <div className="col-lg-5 col-md-10">
          <div className="about-image-wrap">
            <img className="img-full" src="https://cdn.tgdd.vn/Files/2021/01/15/1320504/thi-truong-pc-the-gioi-hinh1_800x450.jpg" alt="About Us" />
          </div>
        </div>
        {/* About Image End */}
      </div>
    </div>
  </div>
  {/* about wrapper end */}
  {/* Begin Counterup Area */}
  <div className="counterup-area">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6">
          {/* Begin Limupa Counter Area */}
          <div className="limupa-counter white-smoke-bg">
            <div className="container">
              <div className="counter-img">
                <img src="https://i.ibb.co/QKXDBNM/1.png" alt="" />
              </div>
              <div className="counter-info">
                <div className="counter-number">
                  <h3 className="counter">2169</h3>
                </div>
                <div className="counter-text">
                  <span>Khách hàng tương tác</span>
                </div>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter gray-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/f1Zj6SL/2.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter">869</h3>
              </div>
              <div className="counter-text">
                <span>Giải thưởng</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter white-smoke-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/vBktQgS/3.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter">689</h3>
              </div>
              <div className="counter-text">
                <span>Giờ làm việc</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter gray-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/z5t0Q7H/4.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter">2169</h3>
              </div>
              <div className="counter-text">
                <span>những công việc hoàn thành</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
      </div>
    </div>
  </div>
  {/* Counterup Area End Here */}
  {/* team area wrapper start */}
  <div className="team-area pt-60 pt-sm-44">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="li-section-title capitalize mb-25">
            <h2><span>Đội ngũ nhân viên</span></h2>
          </div>
        </div>
      </div> {/* section title end */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-60 mb-sm-30 mb-xs-30">
            <div className="team-thumb">
              <img src="https://i.ibb.co/MNQpYyz/1.png" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Vũ Văn A</h3>
              <p>Nhân viên kỹ thuật</p>
              <a href="/">vuvana@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-60 mb-sm-30 mb-xs-30">
            <div className="team-thumb">
              <img src="https://i.ibb.co/7YqMhw3/2.png" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Bùi Thị Thanh Thuy</h3>
              <p>Kế toán quản lý</p>
              <a href="/">Buithanhthuy651@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-30 mb-sm-60">
            <div className="team-thumb">
              <img src="https://i.ibb.co/YWGt86f/3.png" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Hoàng Văn B</h3>
              <p>Nhân viên Kỹ thuật </p>
              <a href="/">HVT@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-30 mb-sm-60 mb-xs-60">
            <div className="team-thumb">
              <img src="https://i.ibb.co/CbjRfW2/4.png" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Ngô Thanh H</h3>
              <p>Tư vấn chăm sóc khách hàng</p>
              <a href="/">Ngothanhhuong@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</div>

    )
  }
}
