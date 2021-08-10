import React, { useState, useEffect } from 'react'
import { Game } from '../Game/Game'
import StyledHome from './StyledHome'

export const Home = () => {
    const [start, setStart] = useState(false)
    const [nbFailed, setNbFailed] = useState(0)
    const [guessWord, setGuessWord] = useState('')
    const [letter, setLetter] = useState('')
    const [allLetters, setAllLetters] = useState([])

    const onChangeGuessWord = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z ]/g, "")
        if (!value.includes(' ')) {
            setGuessWord(value)
        }
    }

    const startGame = (e) => {
        e.preventDefault()
        if (guessWord.length > 3) {
            setStart(true)
            setGuessWord(guessWord.toUpperCase())
        } else {
            alert('Choisissez un mot de plus de 3 lettres.')
        }
    }

    const handleChangeLetter = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase()
        if (value.length !== 0) {
            const lastLetter = value[value.length - 1] 
            setLetter(lastLetter)
        } else {
            setLetter('')
        }
    }

    const submitLetter = (e) => {
        e.preventDefault()
        if (letter) {
            if (allLetters.includes(letter)) {
                setLetter('')
                return alert('Vous avez déjà utilisé cette lettre.')
            }
            setAllLetters(state => [
                ...state,
                letter
            ])
            setLetter('')
        }
    }

    const checkIfIsWin = () => {
        const word = guessWord.split('')
        word.shift()
        const uniqueLetterOfWord = word.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })

        const isWin = allLetters.filter(letter => uniqueLetterOfWord.includes(letter)).length === uniqueLetterOfWord.length
        return isWin
    }
    useEffect(() => {
        if (nbFailed >= 10) {
            alert('Vous avez perdu, retentez votre chance !')
            setStart(false)
            setStart(0)
            setGuessWord('')
            setLetter('')
            setAllLetters([])
        }
    }, [nbFailed])

    useEffect(() => {
        if (allLetters.length !== 0 && checkIfIsWin()) {
            alert('Bravo, vous avez gagné !')
            setStart(false)
            setStart(0)
            setGuessWord('')
            setLetter('')
            setAllLetters([])
        }
    }, [allLetters])

    return (
        <StyledHome>
            <h1>LE JEU DU PENDU</h1>
            {start ? (
                <>
                    <form
                        onSubmit={submitLetter}
                    >
                        <label for='letter'>
                            Saisissez une lettre :
                        </label>
                        <input
                            style={{textTransform: 'uppercase'}}
                            className='letter'
                            name='letter'
                            value={letter}
                            onChange={handleChangeLetter}
                        />
                    </form>
                    <Game
                        allLetters={allLetters}
                        guessWord={guessWord}
                        nbFailed={nbFailed}
                        setNbFailed={setNbFailed}
                    />
                </>
            ) : (
                <form onSubmit={startGame}>
                    <input
                        value={guessWord}
                        onChange={onChangeGuessWord}
                        placeholder='Tapez votre mot'
                    />
                    <button>
                        START
                    </button>
                </form>
            )}   
        </StyledHome>
    )
}
