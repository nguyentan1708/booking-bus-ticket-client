import "../styles/index.css";
import { Icon, InlineIcon } from "@iconify/react";

function Quality() {
    return (
        <section className="quality">
            <div className="container">
                <h2 className="quality-header-title">futa - chất lượng là danh dự</h2>
                <ul className="quality-list">
                    <li className="quality-item">
                        <i className="bx bxs-group quality-item-icon"></i>
                        <div className="quality-item-content">
                            <h4 className="quality-item-title">20m</h4>
                            <div className="quality-item-bottom">
                                <p className="quality-item-sub">Hơn 20 triệu lượt khách</p>
                                <p className="quality-item-text">
                                    Phương Trang phục vụ hơn 20 triệu lượt khách/bình quân 1 năm
                                    trên toàn quốc
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="quality-item">
                        <i className="bx bxs-gas-pump quality-item-icon"></i>
                        <div className="quality-item-content">
                            <h4 className="quality-item-title">250</h4>
                            <div className="quality-item-bottom">
                                <p className="quality-item-sub">Hơn 250 phòng vé, phòng hàng</p>
                                <p className="quality-item-text">
                                    Phương Trang có hơn 250 phòng vé, trạm trung chuyển, bến xe...
                                    trên toàn hệ thống
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="quality-item">
                        <i className="bx bxs-bus quality-item-icon"></i>
                        <div className="quality-item-content">
                            <h4 className="quality-item-title">1,600</h4>
                            <div className="quality-item-bottom">
                                <p className="quality-item-sub">Hơn 1,600 chuyến mỗi ngày</p>
                                <p className="quality-item-text">
                                    Phương Trang phục vụ hơn 1600 chuyến xe đường dài và liên tỉnh
                                    mỗi ngày
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Quality;
