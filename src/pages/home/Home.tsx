import React, { Component } from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';
import MyCard from '../../components/cards/MyCard'
import { Modal } from '@material-ui/core';
import { MyTable } from '../../components/tables/MyTable';
const { cards } = require('../../data/cards.json')
// let audio1 = new Audio("./../../assets/m1.mp3")

let globalTimeouts:any[] = []

export default class Home extends Component {
    state: any = {
        showCard: true,
        modal: false,
        roundCounter: 0,
        modalText: 3,
        startGame: false,
        time: 60,
        color: "green-time",
        group1Points: 0,
        group2Points: 0,
        cardNumber: Math.floor(Math.random() * cards.length),
        chosenCards: [],
        finishCards: false,
        endGame: false
    }

    startGame = () => {
        globalTimeouts = []
        this.setState({ modal: true, modalText: 3, time: 60, chosenCards: [], color: "green-time" })
        for (let i = 0; i < 3; i++) {
            if (i < 2) {
                setTimeout(() => {
                    this.setState({ modalText: this.state.modalText - 1 })
                }, (i + 1) * 1000)
            } else {
                setTimeout(() => {
                    this.setState({ modalText: "בהצלחה" })
                }, (i + 1) * 1000)
            }
        }
        setTimeout(() => {
            this.setState({ startGame: true, modal: false, endGame: false })
            this.setTimer()
        }, 4000);
    }

    setTimer = () => { // game start & end 
        for (let i = 0; i < 60; i++) {
            let event = setTimeout(() => {
                this.setState({ time: this.state.time - 1 })
                if (i === 59) {
                    this.setState({ endGame: true, roundCounter: this.state.roundCounter + 1 })
                }
                if (i === 49) {
                    this.setState({ color: "red" })
                }
            }, (i + 1) * 1000);
            globalTimeouts.push(event)
        }
    }

    range = (start: number, end: number) => {
        return Array(end - start + 1).fill(1).map((_, idx) => start + idx).filter(n => n !== this.state.cardNumber)
    }

    changeCard = () => {
        const basicRange = this.range(0, cards.length - 1);
        const newChosenCards = [...this.state.chosenCards, this.state.cardNumber]
        const validRange = basicRange.filter(num => !newChosenCards.includes(num))
        if (validRange.length > 1 && this.state.time > 0) {
            const randomPick = validRange[Math.floor(Math.random() * (validRange.length))]
            this.setState({ showCard: false, chosenCards: newChosenCards })
            setTimeout(() => {
                this.setState({ cardNumber: randomPick, showCard: true })
            }, 500);
        } else {
            console.log("no more cards")
            this.setState({ modalText: `👏🏽 כל הכבוד! סיימתם ${cards.length} כרטיסים`, modal: true, finishCards: true })
            setTimeout(() => {
                this.setState({ modal: false, endGame: true, roundCounter: this.state.roundCounter + 1 })
            }, 7000);
        }
    }

    onNext = () => {
        this.changeCard()
        if (this.state.roundCounter % 2 === 0) {
            this.setState({ group1Points: this.state.group1Points + 1 })
        } else {
            this.setState({ group2Points: this.state.group2Points + 1 })
        }
    }
    onSkip = () => {
        this.changeCard()
    }

    resetGame = () => {
        this.setState({ group1Points: 0, group2Points: 0,
             chosenCards: [], startGame : false, endGame: false,
            time: 60, modalText: 3, roundCounter: 0
        })
        globalTimeouts.forEach(event => {
            clearTimeout(event)
        });
        globalTimeouts = []
    }

    // !startGame || endGame
    render() {
        const { startGame, modal, modalText, time, cardNumber, showCard,
            finishCards, endGame, group1Points, group2Points, color, roundCounter } = this.state;
        return (
            <div className="home-container">
                {!startGame || endGame ?
                    <>
                        {endGame ? <span className="font-effect-emboss points"> {roundCounter % 2 === 0 ? group1Points : group2Points} Points  </span>
                            :
                            <h2 className="welcome font-effect-outline">!ברוכים הבאים למשחק טאבו</h2>
                        }
                        <div className="start-game-btn-bon">
                            <Button className="start-game" onClick={() => this.startGame()} style={{ fontSize: '22px', borderRadius: '50%' }} variant="contained" color="primary">
                                {roundCounter > 0 ? 'סיבוב הבא' : 'התחל משחק'}


                            </Button>
                        </div>
                    </>

                    :
                    <div className="card-container">
                        <div className="time-con">
                            <span className={`${color} time font-effect-emboss`}>{time}</span>
                        </div>
                        <MyCard
                            showCard={showCard}
                            guessWord={cards[cardNumber].guessWord}
                            words={cards[cardNumber].words}
                            onNext={this.onNext}
                            onSkip={this.onSkip}
                        />
                    </div>
                }
                <div className="table-con">
                    <MyTable
                        group1Points={group1Points}
                        group2Points={group2Points}
                    />
                    <Button 
                    onClick={() => this.resetGame()}
                    style={{ marginTop: '10px', marginBottom:'30px' }} variant="contained" color="primary">משחק חדש</Button>
                </div>
                <Modal
                    open={modal}
                    onClose={() => console.log("w")}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className="modal-con font-effect-outline">
                        {finishCards ?
                            modalText
                            :
                            <h1>
                                {modalText}
                            </h1>
                        }
                    </div>
                </Modal>
            </div >
        )
    }
}
