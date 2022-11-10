import QuizType from "./QuizType";

export default function QuizBar(props) {
    return(
        <div className="QuizBar">
            <h1 className="h1">Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
                <QuizType icon="dice-5" quizType="Random"/>
                <QuizType icon="dumbbell" quizType="Weighted"/>
                <QuizType icon="file-blank" quizType="Regular"/>
                <QuizType icon="font" quizType="Multi"/>
            </ul>
        </div>
    )
}

