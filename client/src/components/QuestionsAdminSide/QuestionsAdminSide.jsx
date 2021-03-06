import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUnansweredQuestions } from '../../redux/actions';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever, MdQuestionAnswer } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import { FormAnswerQuestion } from './FormAnswerQuestion/FormAnswerQuestion';
import ReactModal from 'react-modal';
import "./QuestionsAdminSide.css";

export const QuestionsAdminSide = () => {



    const questions = useSelector(state => state.questions);
    const update = useSelector(state => state.update);

    const dispatch = useDispatch();
    const [idToAnswer, setIdToAnswer] = useState(null);
    const [openPopUpAnswer, setOpenPopUpAnswer] = useState(false);
    const [items, setItems] = useState(questions);
    const [QTA, setQTA] = useState(null);

    function handleOpenPopupAnswer(id) {
        try {
            setIdToAnswer(id);
            setOpenPopUpAnswer(true);
            console.log(id, 'iddddddddd');
            console.log(questions, 'questions');
            let q = questions.filter(question => question.question._id === id);
            console.log(q, 'qqqqqqq');
            setQTA(q);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(questions)
    function handleClosePopupAnswer() {
        setOpenPopUpAnswer(false);
    }


    useEffect(() => {
        dispatch(getAllUnansweredQuestions());
    }, [update]);

    useEffect(() => {
        setItems(questions);
    }, [questions])

    const columns = [
        {
            name: "Question",
            selector: "question.question",
            sortable: false,
        },
        {
            name: "User",
            selector: "question.user",
            sortable: true
        },
        {
            name: "Product",
            selector: "question.productn",
            sortable: true
        },
        {
            name: "Actions",
            cell: row => (<div className="actions">
                <button type="button" onClick={() => {
                    handleOpenPopupAnswer(row.question._id)
                    console.log(row.question._id, "id question")
                }}><MdQuestionAnswer /></button>

                {/*    <button type="button" onClick={() => {
                    handleDeleteProduct(row._id);
                    handeOpenAlertDelete();
                }}
                >
                    <MdDeleteForever />
                </button> */}
            </div>)
        }
    ]
    return (
        <>
            <div className="questions-admin-sales-body">
                <DataTable
                    columns={columns}
                    data={items}
                    title="Yet to answer"
                    striped
                    highlightOnHover
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 8]}
                    pagination
                />
            </div>

            <div className="popupAnswer">
            <ReactModal isOpen={openPopUpAnswer} className='modalReviewForm' overlayClassName='reactModalOverlay'>
                <FormAnswerQuestion handleClosePopup={handleClosePopupAnswer} showPopup={openPopUpAnswer} questA={QTA} />
            </ReactModal>
            </div>
        </>
    )
}
