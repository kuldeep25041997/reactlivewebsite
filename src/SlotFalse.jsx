import React from 'react';
import SlotM from './SlotM';

const SlotFalse = () => {
    return (
    <>
        <div className='slot_inner'>
            <h1> {SlotM.x} {SlotM.y} {SlotM.z} </h1>
            <h1> this is not matching </h1>
            <hr />
        </div>
        </>
    )
}

export default SlotFalse;