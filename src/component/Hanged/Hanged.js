import React from 'react'

export const Hanged = ({ nbFailed }) => {
    const ImageFail = nbFailed && nbFailed <= 10 ? (require(`../../ressources/Fail${nbFailed}.jpg`)).default : null

    return (
        ImageFail ?
            <img src={ImageFail} alt='hanged' />
            :
            <div style={{height: '400px'}} />
    )
}
