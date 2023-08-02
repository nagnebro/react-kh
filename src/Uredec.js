/*
    useReducer : state가 많아지거나 부모와 자식간의 관계가 복잡한 경우에
    관리를 해줘서 빠르게 작업할 수 있게 도와주는 Hook

    dispatch : reducer를 호출함
               reducer는 store에 가서 현재 state값을 가져와서 새로운 state를 반환해준다.

               Component - (dispatch) -> Action -> Reducer -> Store 
*/
import { useReducer } from "react";


function reducer(state, action){

    switch(action.type){

        case 'PLUS':
            return state + 1;

        case 'MINUS':
            return state - 1;
        default:
            return state;
    }

}


export default function Count(){

    // const [상태 객체, 디스패치함수] = useReducer(reducer함수, 초기상태)
    const [number, dispatch] = useReducer(reducer,5)

    const onPlus = ()=>{
        dispatch({type:'PLUS'})
    }

    const onMinus = ()=>{
        dispatch({type:'MINUS'})
    }

    return <div>
            <h3>{number}</h3>
            <button onClick={onPlus}> + </button>
            <button onClick={onMinus}> - </button>

    </div>
}
