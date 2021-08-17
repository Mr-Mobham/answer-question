import QuestionsItems from '../../components/QuestionsItems/questions';
import { useSelector } from "react-redux";


function Questions() {
  const getQuestions       = useSelector(state => state.questions);

  return (
    <div className="questions">
        <div className="questions__container container">
           <QuestionsItems data={getQuestions.Items}></QuestionsItems>
        </div>
    </div>
  );
}

export default Questions;
