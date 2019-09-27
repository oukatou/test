import {keyframes} from 'emotion'

const closing = keyframes`
                0% {top: 180px}
                100% {top: 155px}
                `
const opening = keyframes`
                0% {top: 155px}
                100% {top: 180px}
                `              
function stylesheet(props){
    const {open,mask} = props
    return {
        overlay: mask ? {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'rgba(0,0,0,0.4)',
            opacity: open ? 1 : 0,
            transition: 'all ease 0.2s',
            pointerEvents: open ? 'visible' : 'none',
            transitionDelay: open ? '0s' : '0.3s',
            zIndex: 1000
        } : {},
        content:{
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'rgb(255,255,255)',
            opacity: open ? 1 : 0,
            width: '500px',
            '@media (max-width: 760px)':{
                width: '300px'
            },
            position: 'absolute',
            left: '50%',
            top: '180px',
            transform: 'translateX(-50%)',
            transition: 'opacity ease 0.4s',
            animation: open ? `${opening} 0.4s` : `${closing} 0.4s`,
            outline: 0
        },
        header:{
            borderBottom: '1px solid #ccc',
            padding : '10px',
            fontSize: '20px',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between'
        },
        body:{
            padding: '20px',
            overflow: 'scroll',
            maxHeight: '250px',
        },
        close:{
            cursor: 'pointer',
            fontWeight: '200',
            lineHeight: '17px',
            fontSize: '35px'
        }
    }
}

export default stylesheet