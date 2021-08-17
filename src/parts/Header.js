import { useDispatch } from "react-redux";
import {
  showModalComment , 
} from '../actions/index';


function Header() {
  const dispatch  = useDispatch();

  const showModal = () => {
    dispatch(showModalComment(true));
  }


    return (
      <div className="header">
          <div className="header__right">
            <h3 className="header__title">لیست سوالات</h3>
          </div>

          <div className="header__left">
                <div className="header__left-main">
                        <div className="header__btn">
                            <button onClick={() => showModal()} className="header__btn-item" type="button">
                              <img alt="" src={require('../assets/svg/addQuestion.svg').default} />
                              <h3 className="header__btn-title">سوال جدید</h3>
                            </button>
                        </div>

                        <div className="header__avatar-item">
                          <img alt="" className="header__avatar-img" src={require('../assets/svg/userAvatar.svg').default} />
                          <h3 className="header__username-title">مرضیه ابراهیمی</h3>
                        </div>
                </div>

          </div>
          

      </div>
    );
  }
  
  export default Header;
  