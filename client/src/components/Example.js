import React, { Component } from 'react'

import Content from './content'
import Input from './input'

const Initial_State = {
    nounOne: '', 
    verbEd: '',
    nounTwo: '',
    nounThree: '',
    verbOne: '',
    nounFour: '',
    adjective: '',
    contentVisible: false

}

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = Initial_State
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit =  this.handleFormSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(Initial_State)
        } else {
            this.setState({contentVisible: true })
        }
    }

    render() {

        const inputData = [
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Verb-ED', state: this.state.verbEd, name: 'verbEd'},
            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Verb', state: this.state.verbOne, name: 'verbOne'},
            {title: 'Noun', state: this.state.nounFour, name: 'nounFour'},
            {title: 'Adjective', state: this.state.adjective, name: 'adjective'},

        ]
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="card__inputs">
                    {
                        inputData.map((data, index) => {
                            return Input((data), this.handleInputChange, index)
                        })
                    }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate Madlib' : 'Clear Form'} </button>
                {
                    this.state.contentVisible ? <Content data={this.state} /> : ''
                }
            </form>
        )
    }
}

export default Example;