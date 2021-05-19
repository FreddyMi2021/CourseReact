import React from 'react';
import {FaChevronRight} from 'react-icons/fa';

const Chevron = (props) => {
    return(
        <>
            <FaChevronRight
                className={props.className}
                size={props.size}
                style={{color:props.color, float:props.position}}
            />
        </>
    )
}
export default Chevron;