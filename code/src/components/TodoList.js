import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'
import { FaTrashAlt } from "react-icons/fa";


import todos from "reducers/todos"
import NoTasks from "./NoTasks";
import TodoCard from "./TodoCard";
import CounterButtons from "./CounterButtons";


const TodoSection = styled.section`
    color: black;
    width: 90%;
    margin-top: 0;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 15px;
    border-radius: 0px 0px 25px 25px;
    background-color: whitesmoke;
    @media (min-width: 768px) {
    min-height: 500px;
    }
    @media (min-width: 992px) {
    min-height: 600px;
    }
`
const TaskCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid grey;
    align-items: center;
    margin-bottom: 10px;
`

const CheckboxDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(245,245,245,0.622);
    flex-direction: row;
`
const DeleteButton = styled.button`
    border: none;
    font-size: 23px;
    background-color: rgba(245,245,245,0.622);
    @media (min-width: 768px) {
    font-size: 28px;
    margin-top: -4px;
    cursor: pointer;
    }
    &:hover{
        color: tomato;
    }
`



const TodoList = () => {

    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()
    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <>
            {items.length < 1 && <NoTasks />}
            {items.length > 0 && (
                <TodoSection>
                    {items.map((item) => (
                        <TaskCheckbox key={item.id}>
                            <TodoCard item={item} />
                            <CheckboxDelete>
                                <DeleteButton
                                    onClick={() => onDeleteTodo(item.id)}>
                                    <FaTrashAlt />
                                </DeleteButton>
                            </CheckboxDelete>
                        </TaskCheckbox>
                    ))}
                    <CounterButtons />
                    {/* <ButtonsCount>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("all"))} >All</Buttons>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("active"))} >Active</Buttons>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("completed"))} >Done</Buttons>
                    </ButtonsCount> */}
                </TodoSection>
            )}
        </>
    )
}

export default TodoList