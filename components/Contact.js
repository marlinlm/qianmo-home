const Contact = () => {
    return (
        <div className="contact-inner-page">
            <div className="container">
                <div className="row inner mb">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-inner-box">
                            <div className="contact-inner-icon">
                                <i className="bi bi-telephone-x" />
                            </div>
                            <div className="contact-content">
                                <h4>电话</h4>
                                <span>17610309866（刘老师）</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-inner-box">
                            <div className="contact-inner-icon">
                                <i className="bi bi-envelope-open" />
                            </div>
                            <div className="contact-content">
                                <h4>E-mail</h4>
                                <span>liuh@ust.hkm</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-inner-box two">
                            <div className="contact-inner-icon">
                                <i className="bi bi-geo-alt" />
                            </div>
                            <div className="contact-content">
                                <h4>地址</h4>
                                <span>香港科技大学（广州）E3栋5楼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;