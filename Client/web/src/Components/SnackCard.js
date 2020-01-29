import React from 'react'
import { connect } from 'react-redux'


class SnackCard extends React.Component {

    render() {
        const { snack } = this.props

        return (<div className="card" style={styles.card}>
            <img style={styles.image} src="https://cdn.awsli.com.br/800x800/163/163535/produto/6024236/de8940b4fa.jpg"/>
            <h4>{snack.name}</h4>

            <a href="#" className="btn btn-primary">Quero esse!</a>
        </div>)
    }
}

const styles = {
    card: {
        width: '18rem',
        textAlign: 'center',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%'
    }
}

const mapStateToProps = ({ snacks }, { id }) => ({
    snack: snacks[id]
})

export default connect(mapStateToProps)(SnackCard)