import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const TimelineItem = ( {data} : {data:any}) => {

    return(
        <>
            <Tooltip 
            placement="top"
                style={{width: 10, height: 10, borderRadius: '50%'}}
                title={ 
                    <>
                        {/* <span style={{fontWeight: 700, paddingRight: 10}}>{data.registos[1].tag}:</span> 
                        <span>{data.registos[0].date}</span> <br/> 
                        <span>{data.registos[0].healthProfessional}</span>  */}
                        <span style={{fontWeight: 700, paddingRight: 10}}>{data.tag}:</span> 
                        <span>{data.date}</span> <br/> 
                        <span>{data.healthProfessional}</span> 
                    </>
                } 
                arrow>
                    <div className='timeline-item' style={{ width: 10, height: 10, margin: 4}}>
                        <div style={{backgroundColor: data.category.color, width: 10, height: 10, borderRadius: '50%', border: '#fff 1px solid', zIndex: 100}}></div>
                        {/* <div style={{backgroundColor: '#000000', width: 20, height: 20, borderRadius: '50%', paddingBottom:40}}>{data.registos[0].category.color}</div> */}
                    </div>
            </Tooltip>
        </>
    )
}

{/* <>
                <span style={{fontWeight: 700, paddingRight: 10}}>{data.tag}:</span> 
            <span>{data.date}</span> <br/> 
            <span>{data.healthProfessional}</span></> */}


 /*   data.registos.map((data: any) => (
                    <>
                        <span style={{fontWeight: 700, paddingRight: 10}}>{data.registos.tag}:</span> 
                        <span>{data.registos.date}</span> <br/> 
                        <span>{data.registos.healthProfessional}</span>
                    </>
                )) */

export default TimelineItem;

