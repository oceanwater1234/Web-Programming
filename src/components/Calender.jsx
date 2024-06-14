import '../styles/Calender.scss'

export default function Calender() {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const getDaysInMonth = 

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