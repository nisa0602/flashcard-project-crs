import QuizType from "./QuizType";

export default function QuizBar(props) {
    const quizArr = [
        {icon: "dice-5", type: "Random"},
        {icon: "dumbbell", type: "Weighted"},
        {icon: "file-blank", type: "Regular"},
        {icon: "font", type: "Multi"}
    ];

    const quizType = quizArr.map((qt, i) => {
        return(
            <QuizType key={i} icon={qt.icon} quizType={qt.type} userChoice={props.userChoice} />
        )
    })
    return(
        <div className="QuizBar">
            <h1 className="h1">Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
                {quizType}
               {/* <QuizType icon="dice-5" quizType="Random" userChoice={props.userChoice}/>
                <QuizType icon="dumbbell" quizType="Weighted" userChoice={props.userChoice}/>
                <QuizType icon="file-blank" quizType="Regular" userChoice={props.userChoice}/>
    <QuizType icon="font" quizType="Multi" userChoice={props.userChoice}/> */}
            </ul>
        </div>
    )
}

