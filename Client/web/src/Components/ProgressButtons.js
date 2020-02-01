import React from 'react'


class ProgressButtons extends React.Component {

    render() {

        const { goBack, goAhead, goAheadDisabled, goAheadText } = this.props

        return (<>
              <div style={styles.progressButtonsContainer}>
                    <div style={styles.progressButtonsContainerData}>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={goBack}
                        >
                            Voltar
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={goAhead}
                            disabled={goAheadDisabled}
                        >
                            {goAheadText || 'Continuar'}
                        </button>
                    </div>
                </div>
        </>)
    }
}

const styles = {
    progressButtonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    progressButtonsContainerData: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px'
    },
}

export default ProgressButtons