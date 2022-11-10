export default function QuizType(props){
    return(
        <li className="col-sm-3 text-center">
            <div className="nav-card">
                <box-icon name={props.icon} color="magenta" size="md"></box-icon>
                <span>{props.quizType}</span>
            </div>
        </li>
    )
}
