import iconQuestion from '../../../assets/svg/comment.svg';
import avatar from '../../../assets/svg/images.jpg';


function QuestionSingle(props) {
  const {data}    = props;


  return (
    <div className="questions__content">
      single
         {/* {
          data.map(item => (
            <div key={item.id} className="questions__content-item">
                  <div className="questions__content-main">
                    
                        <div className="questions__content-header">
                              <div className="question__header-right">
                                    <div className="question__header-avatar">
                                        <img className="question__avatar-item" src={require(`../../assets/svg/${item.avatar}`).default}></img>
                                        <h3 className="question__header-title">{item.title}</h3>
                                    </div>
                              </div>

                              <div className="question__header-left">
                                    <div className="question__date-time">
                                        <div className="question__header-time">
                                          <h3 className="question__time-title" >ساعت</h3>
                                          <span className="question__time-colon" >:</span>
                                          <h3 className="question__time-item" >14:48</h3>
                                        </div>

                                        <span className="question__time-line"></span>

                                        <div className="question__header-time">
                                          <h3 className="question__time-title" >تاریخ</h3>
                                          <span className="question__time-colon" >:</span>
                                          <h3 className="question__time-item" >1400/02/12</h3>
                                        </div>
                                    </div>

                                    <div className="question__header-answer">
                                        <img className="question__answer-icon" src={iconQuestion}></img>
                                        <h3 className="question__answer-title">{item.countAnswer}</h3>
                                    </div>

                              </div>
                        </div>

                        <div className="questions__content-data">
                            <p className="questions__content-answer">
                             {item.subject}
                            </p>
                            <div className=" questions__content-btn">
                                <button className="questions--btn" type="button">مشاهده جزئیات</button>
                            </div>
                        </div>
                  </div>
                  
            </div>
            ))
          }
          */}
  

    </div>
  );
}

export default QuestionSingle;
