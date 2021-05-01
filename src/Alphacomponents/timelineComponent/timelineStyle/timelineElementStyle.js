let elementStyle={
    event: {
        position: 'relative',
        margin: '10px 0'
    },
    'event-left': {
        paddingLeft: 45,
        textAlign: 'left'
    },
    iconType: {
        position: 'absolute',
        top: -15,
        borderRadius:'50%',
        width: 30,
        height: 30,
        marginLeft:0,
        display: 'flex'
    },
    eventContainer: {
        position: 'relative'
    },
    eventContainerBefore: {
        top: 24,
        left: '100%',
        borderColor: 'transparent',
        borderLeftColor: '#ffffff'
    }, 
    time: {
        marginBottom: 3
    },
    subtitle: {
        marginTop: 2,
        fontSize: '85%',
        color: '#777'
    },
    message: {
        width: '98%',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        marginTop: '1em',
        marginBottom: '1em',
        lineHeight: 1.6,
        padding: '0.5em 1em'
    },
    messageAfter: {
        clear: 'both',
        content: '',
        display: 'table'
    },
    actionButtons: {
        marginTop:10,
        float: 'right',
        textAlign: 'right'
    },
    card: {
        left: 0,
       
        boxShadow: '0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)',
        backgroundColor: 'white'
    },
    cardTitle: {
        backgroundColor: '#ffffff',
        padding: 10,
        color: '#fff',
        borderRadius: "5px",
    },
    cardBody: {
        backgroundColor: '#ffffff',
        marginBottom: '1em',
        lineHeight: 1.6,
        padding: 10,
        minHeight: 40
    },
    toggleEnabled: {
        cursor: 'pointer'
    },
    eventAfter: {
        clear: 'both',
        content: '',
        display: 'table'
    },
}
export default elementStyle;