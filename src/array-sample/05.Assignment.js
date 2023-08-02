
function Frame({user}){

    return(
        <div>
    <li>{user.name}</li>
    <li>{user.tel}</li>
    </div>
    );
}


export default function Tel(){

    const tel_list = [

        {name : '김영찬',tel : '010-1111-2222'},
        {name : '김영찬2',tel : '010-2222-2222'},
        {name : '김영찬3',tel : '010-3333-2222'},
    ]

    return(

        <div>
        <Frame user = {tel_list[0]}/>
        <Frame user = {tel_list[1]}/>
        <Frame user = {tel_list[2]}/>
        </div>
    );
}