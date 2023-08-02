/**
 * 일반적으로 React 데이터는 위에서 아래(부모에서 자식) props를 통해 전달.
 * 객체?(props)를 여러 컴포넌트들에게 전달해줘야 하는 경우 과정이 번거로울 수 있다.
 * context를 이용하면 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이런 값을 공유할 수 있게 함.
 * context를 사용하면 중간에 있는 element에게 props를 넘겨주지 않아도 된다. 즉 컴포넌트를 참조할 때 function Test({user}) 와 같이 매개변수로 props를 일일히 안넘겨줘도 된다는 것.
 * 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음.
 * 
 * context를 사용하면 컴포넌트를 재사용하기 어려워진다. 
 * 
 * contextAPI를 사용하기 위해 Provider Consumer, CreateContext를 알아야 함
 * Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할을 한다. 
 * Consumer : context의 변화를 감시하는 컴포넌트
 * CreateContext : context객체를 생성한다. 
 */

import { createContext } from "react";
// 1번 객체 생성함.
export const Appcontext = createContext(); // 객체 생성


function Children(){
    return(
        // 2번. 상태 변화를 감시함.
        /*context의 객체를 생성하고 생성된 context의 변화를 감시하는 컴포넌트.*/ 
        <Appcontext.Consumer> 
            {(user)=>( // 이전에는 함수의 매개변수로 props를 받았는데 이 방법을 이용한다는 것은 어떻게 접근하는 것인가.
                <div>
                    <h3>Appcontext 존재하는 값의 name은 {user.name} 입니다.</h3>
                    <h3>Appcontext 존재하는 값의 job은 {user.job}입니다.</h3>
                </div>
            )}      
        </Appcontext.Consumer>
    );
}



export default function Ucontext(){

    const user ={
        name : "김영찬",
        job : "강사"
    }
    return(
        <div>
            {/* 3. 생성한 context를 하위 컴포넌트에게 전달하는 역할. */}
            <Appcontext.Provider value ={user}>
            <Children/>
            </Appcontext.Provider>
        </div>
    );

}