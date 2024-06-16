import '../styles/Calender.scss'

function GetDay() {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    
    const getDaysInMonth = (year,month) => {
        return new Date(year, month,0).getDate()
    }
    
    console.log(getDaysInMonth(year,month))
}


export default function Calender() {

    
    return(
        <div className='CalenderWrapper'>
            <div className='month'></div>
            <div className='month'></div>
            <div className='month'></div>
            <div className='month'></div>
            <div className='month'></div>
        </div>
    )
}