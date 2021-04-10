import React from 'react';
import SlotM from './SlotM';

const SlotTrue = () => {
    return (
        <>
        <div className='slot_inner'>
            <h1> {SlotM.x} {SlotM.y} {SlotM.z} </h1>
            <h1> this is matching </h1>
            <hr />
        </div>
        </>
    )
}

export default SlotTrue;
