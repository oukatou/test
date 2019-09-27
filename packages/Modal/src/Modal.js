import React from 'react'
import ModalPresenter from './ModalPresenter'
function Modal(props){
    const {title,
           children,
           onClose,
           open,
           className,
           headerChildren,
           mask,
           maskClosable,
           keyboard
          } = props
    return <div className={className}>
                <ModalPresenter 
                    className={className} 
                    title={title} 
                    onClose={onClose} 
                    open={open}
                    headerChildren={headerChildren}
                    mask={mask}
                    maskClosable={maskClosable}
                    keyboard={keyboard}
                >
                    {children}
                </ModalPresenter>
           </div>
}

export default Modal