import '../styles/index.css';
function Regulation(){
    return(
        <section className="regulation">
        <div className="container">
            <ul className="regulation-list">
                <li className="regulation-item">
                    <a href="#" className="regulation-link">
                        <i className='bx bxs-credit-card-front regulation-item-icon'></i>
                        <div className="regulation-content">
                            <h3 className="regulation-content-title">những quy định chung</h3>
                            <p className="regulation-content-des">Quy định về việc đặt mua vé và quy định chung</p>
                        </div>
                    </a>
                </li>
                <li className="regulation-item">
                    <a href="#" className="regulation-link">
                        <i className='bx bxs-truck regulation-item-icon'></i>
                        <div className="regulation-content">
                            <h3 className="regulation-content-title">vận chuyển hàng hóa</h3>
                            <p className="regulation-content-des">Quy định về hàng hoá và an toàn vận chuyển</p>
                        </div>
                    </a>
                </li>
                <li className="regulation-item">
                    <a href="#" className="regulation-link">
                        <i className='bx bxs-package regulation-item-icon'></i>
                        <div className="regulation-content">
                            <h3 className="regulation-content-title">thông tin hành lý</h3>
                            <p className="regulation-content-des">Quy định về hành lý xách tay và ký gửi</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    );
}

export default Regulation;