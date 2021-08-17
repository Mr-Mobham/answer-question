import QuestionsItems from '../../../components/QuestionsItems/questions';
import { useSelector,useDispatch } from "react-redux";


function SingleQuestion(props) {
  const dispatch           = useDispatch();
  const getQuestions       = useSelector(state => state.questions);

  return (
    <div className="questions">
        {/* <div className="questions__container container">
           <QuestionsItems data={getQuestions.Items}></QuestionsItems>
        </div> */}
        {props.match.params.id}
    </div>
  );
}

export default SingleQuestion;
