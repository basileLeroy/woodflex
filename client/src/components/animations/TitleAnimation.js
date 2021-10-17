import React from "react";
import styled, { keyframes } from "styled-components";

const TitleAnimation = ({title}) => {
    const titleArray = title.split("");
    console.log(titleArray);

    return (
        <>

            <Wrapper className="text-6xl">
                {titleArray.map((character, index) => {
                    console.log(character);
                    return (
                        <span key={index}>{character}</span>
                    )
                })}
            </Wrapper>
        < />
    );
}
const animation = keyframes`
    0% { opacity: 0; transform: translateX(-100px) skewY(10deg) skewX(10deg) rotateZ(20deg); filter: blur(2px); }
    100% { opacity: 1; transform: translateX(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
`

const Wrapper = styled.h1`
    display: inline-block;
    margin-left: 50px;
    span {
        display: inline-block;
        white-space: pre;
        opacity: 1;
        animation-name: ${animation};
        animation-duration: 1s;
        animation-fill-mode: forward;
        animation-iteration-count: once;
    }
`

export {TitleAnimation};