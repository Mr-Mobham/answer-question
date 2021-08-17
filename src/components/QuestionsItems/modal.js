import { useSelector,useDispatch } from "react-redux";
import {
  addQuestion,
  showModalComment , 
} from '../../actions/index';


function Modal(props) {
  const getState                  = useSelector(state => state.questions);
  const statusModal               = getState.showModalAddComment;
  const dispatch                  = useDispatch();
  const form                      = getState.formData;


  const closeModal = () => {
    dispatch(showModalComment(false));
  }

  const createQuestion  = () => {
    let checkEmpty = true;

    for (const key in form) {
      if (form[key] === '') {
        checkEmpty = false;
      }
    }

    if (checkEmpty) {
      dispatch(addQuestion(form))
    }

  }

  const cancelQuestion = () =>{
    dispatch(showModalComment(false));
  }

  const updateInputData = (e,propertyNameFormUpdate) => {
    const value                  = e.target.value;
    form[propertyNameFormUpdate] = value;
  }


  return (
    <div
      className={
        'modal' +
        (statusModal ? " show--modal" : "")
      }
    >
       <div key={statusModal} className="modal-content">
                <div className="modal__header">
                    <div className="modal__header-right">
                        <h3 className="modal__header-title">ایجاد سوال جدید</h3>
                    </div>
                    <div className="modal__header-left">
                       <img alt="" onClick={() => closeModal()} className="modal__header-close" src={require('../../assets/svg/closeModal.svg').default} />
                    </div>
                </div>

                <div className="modal__content-items">
                        <div className="modal__content-main">
                                <div className="modal__content-data">
                                      <div className="modal__content-item">
                                          <h3 className="modal__label-title">موضوع</h3>
                                          <input onKeyUp={(e)=>updateInputData(e,'title')} className="modal__label-item" type="text" />
                                      </div>

                                      <div className="modal__content-item">
                                          <h3 className="modal__label-title">متن سوال</h3>
                                          <textarea onKeyUp={(e)=>updateInputData(e,'subject')} className="modal__label-item modal--textarea" rows="4" cols="50" />
                                      </div>
                                </div>
                                <div className="modal__content-btn">
                                    <button onClick={() => cancelQuestion()} className="header__btn-item modal--cancel" type="button">
                                      <h3 className="header__btn-title">انصراف</h3>
                                    </button>
                                    <button onClick={() => createQuestion()} className="header__btn-item modal--btn" type="button">
                                      <h3 className="header__btn-title"> ایجاد سوال</h3>
                                    </button>

                                </div>
                        </div>

                </div>

        </div>
    </div>

  );
}

export default Modal;
