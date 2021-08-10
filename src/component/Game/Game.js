import React, { useEffect } from 'react'
import { Hanged } from '../Hanged/Hanged'
import StyledGame from './StyledGame'


export const Game = ({ allLetters, guessWord, setNbFailed, nbFailed }) => {
    useEffect(() => {
        setNbFailed(allLetters.filter((letter) => !guessWord.split('').includes(letter)).length)
    }, [allLetters])

    return (
        <StyledGame>
            <Hanged
                nbFailed={nbFailed}
            />
            {allLetters.length > 0 &&
                <div className='wrapper-letter'>
                    <h4>
                        Vos lettres utilisées :
                    </h4>
                    {allLetters.map(letter => {
                        return (
                            <span>
                                {letter}
                            </span>
                        )
                    })}
                </div>
            }
            <div className='hidden-word'>
                {guessWord.split('').map((letter, i) => {
                    return(
                        <p>{i === 0 || allLetters.includes(letter.toUpperCase()) ? letter : ' '}</p>
                    )
                })}
            </div>
        </StyledGame>
    )
}
