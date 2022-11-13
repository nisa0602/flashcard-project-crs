export default function QuizType(props){
    return(
        <li className="col-sm-3 text-center">
            <div className="nav-card" onClick={()=>{props.userChoice(props.quizType)}}>
                <box-icon name={props.icon} color="#f29999" size="md"></box-icon>
                <span>{props.quizType}</span>
            </div>
        </li>
    )
}
