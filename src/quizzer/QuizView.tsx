import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";
import { QuizEdit } from "./QuizEdit";

import "./QuizView.css";
import { Button } from "react-bootstrap";

export const QuizView = ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetView
}: {quiz:Quiz,editQuiz:any,deleteQuiz:any,resetView:any}) => {
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="quiz_card">
            <Button
                    className="edit_button"
                    onClick={() => {setEdit(!edit)}}
                >
                    Edit
                </Button>
            {edit &&( 
                <QuizEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetView={resetView}
                ></QuizEdit>)
            }
            {!edit && 
                <QuizExpanded
                    quiz={quiz}
                    editQuiz={editQuiz}
                    resetView={resetView}
                    switchEdit={switchEdit}
                ></QuizExpanded>
            }
        </div>
    );
};
