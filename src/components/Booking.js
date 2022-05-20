import '../styles/index.css';

function Booking(){
    return (
        <section className="booking">
        <div className="container">
            <div className="booking-box">
                <form className="booking-form main-form">
                    <div className="booking-options">
                        <div className="form-group booking-form-group booking-options-one-way">
                            <input type="radio" name="type-of-way" id="options-one-way" checked></input>
                            <label for="options-one-way">Một chiều</label>
                        </div>
                        <div className="form-group booking-form-group booking-options-two-way">
                            <input type="radio" name="type-of-way" id="options-two-way"></input>
                            <label for="options-two-way">Khứ hồi</label>
                        </div>
                    </div>
                    <div className="booking-infor">
                        <div className="booking-route">
                            <div className="booking-route-swap"><img src="./images/home-booking-swap.png" alt=""
                                    className="booking-route-swap-img"/>
                            </div>
                            <div className="form-group booking-form-group booking-route-item booking-route-departure">
                                <label for="route-departure">Điểm đi</label>
                                <input type="text" id="route-departure" placeholder="Chọn điểm đi"/>
                                <select name="diemdi" id="diemdi">
                                    <option value="hcm">Hồ Chí Minh</option>
                                    <option value="hanoi">Hà Nội</option>
                                </select>
                            </div>
                            <div className="form-group booking-form-group booking-route-item booking-route-destination">
                                <label for="route-destination">Điểm đến</label>
                                <input type="text" id="route-destination" placeholder="Chọn điểm đến"/>
                            </div>
                        </div>
                        <div className="booking-date">
                            <div className="form-group booking-form-group booking-date-item booking-date-departure">
                                <label for="date-departure">Ngày đi</label>
                                <input type="date" name="" id="date-departure"/>
                            </div>
                            <div className="form-group booking-form-group booking-date-item booking-date-destination">
                                <label for="date-destination">Ngày về</label>
                                <input type="date" name="" id="date-destination" disabled/>
                            </div>
                        </div>
                    </div>
                    <button className="booking-submit form-submit-button" type="submit">
                        <i className="fa-solid fa-magnifying-glass booking-submit-icon"></i>
                        <span className="booking-submit-text">tìm chuyến xe</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
    );
}

export default Booking;