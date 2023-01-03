import React, {ChangeEvent} from 'react';

type PropsType ={
    checked:boolean
    callBack:(eventValue:boolean)=>void
}
export const SuperCheckBox = (props:PropsType) => {

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }
    
    return (
        <div>
            <input type={'checkbox'} checked={props.checked} onChange={onChangeHandler}/>
        </div>
    );
};

export default SuperCheckBox;