import React, { useEffect, useState } from 'react'

export default function  Trivia({
    data,setStop,qno,setQno
}) {
    const [qn,setQn] = useState(null);
    const [selectans,setSelectans] = useState(null);
    const [className,setClassName] = useState("answer");

    const delay = (duration,fun) => {
        setTimeout(() => {
            fun();
        },duration);
    };

    const Clickhamdler = (ans) =>{
        setSelectans(ans);
        setClassName("answer active");
        delay(1000,
            ()=>setClassName(ans.correct?"answer correct":"answer wrong"));
        delay(6000, ()=> {
        if (ans.correct) {
            setQno((prev) => prev + 1);
            setSelectans(null)
        }
        else{
            setStop(true);
        }
    });
        
    };
    useEffect(() => {
        setQn(data[qno-1]);
    },[data,qno]);

    
    return (
        <div className='trivia'>
            <div className="question">{qn?.question}</div>
            <div className="answers">
                {qn?.answers.map((ans) => (
                <div className={selectans === ans ? className:"answer"} onClick={()=>Clickhamdler(ans)}>{ans.text}</div>                    
                ))}
                
            </div>
        </div>
    )
}
