import  React , { useState, useRef, useEffect} from   'react';

function timeApp( ){

    const intervalRef = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    // Setting the difference between the target time and the current time
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor((total/1000*60*60) % 24);
        const days = Math.floor((total/1000*60*60*24));
        return {
            total, days, hours, minutes, seconds
        };
    }
    // making the timer stop when it reaches  zero
    function startTimer(deadline){
        let {total, days, hours, minutes, seconds} = getTimeRemaining(deadline);
        if (total >=0){
            // Updating the timer
            // Adding a '0' to the variable if it is less than 10
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds) 
            )
        }else{
            clearInterval(intervalRef.current);
        }
    }
    // reset the timer
    function clearTimer(endtime) {
        setTimer('00:00:10');
        if (intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(()=>{
            startTimer(endtime);
        }, 1000)
        intervalRef.current = id;
    }
    function getDeadlineTime() {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
    // Setting a starting point 

    useEffect(()=> {
        clearTimer(getDeadlineTime());
        return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
    }, []);

    function onClickResetBtn(){
        if (intervalRef.current) clearInterval(intervalRef.current); // important line to avoid memory leak. 
        clearTimer(getDeadlineTime());
    }

    return(
        <div className="App">
            <button onClick = {onClickResetBtn}>START</button>
        </div>
    );
}
export default timeApp;