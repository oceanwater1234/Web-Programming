function Day(day){
    const DestiDate  = new Date(day).getTime()
    const NowDate  = new Date().getTime()
    const gap = DestiDate - NowDate
  
    if(!gap) return 0
    return Math.floor(gap / (1000 * 60 * 60 * 24)) + 1
}

export default function Dday(props){
    const testList = {
        1 : "2024-07-11T00:00+0900", //7월 모의평가
        2 : "2024-09-04T00:00+0900", //9월 모의평가
        3 : "2024-10-15T00:00+0900", //10월 모의평가
        4 : "2024-11-14T00:00+0900", //11월 대학수학능력평가
    }

    if(props.day){
        return(
            <div>대학수학능력평가 D-{Day(testList[4])}</div>
        ) 
    }

    let number = 1
    let str = ''

    switch(number) {
        case 1: str='7월 모의평가 D-'; break;
        case 2: str='9월 모의평가 D-'; break;
        case 3: str='10월 모의평가 D-'; break;
        default: str='수능 화이팅!!'; break;
    }
    
    if(!Day(testList[number]) && number < 4) number++
    return(
        <div>{str}{Day(testList[number])}</div>
    )
}