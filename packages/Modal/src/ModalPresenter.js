import React,{Component} from 'react'
import stylesheet from './Modal.stylesheet'
import {css,cx} from 'emotion'
import customClassNames from './createCustomClassNames'

class ModalPresenter extends Component{
    onClose=this.props.onClose
    handleOverlayClick=(e)=>{
        if(e.target == e.currentTarget){
            this.onClose()
        }
    }
    componentDidMount(){
        document.body.addEventListener('keyup',this.handleKeyup)
    }
    componentWillUnmount(){
        document.body.removeEventListener('keyup',this.handleKeyup)
    }
    handleKeyup=(e)=>{
        if(this.props.keyboard && e.keyCode==27){
            this.onClose()
        }
    }
    render(){
        const { title,
                children,
                className,
                headerChildren,
                onClose,
                open,
                backClosable
              } = this.props;
        const overlayClassName = className && customClassNames(className,'overlay');
        const contentClassName = className && customClassNames(className,'content');
        const headerClassName = className && customClassNames(className,'header');
        const closeClassName = className && customClassNames(className,'close');
        const bodyClassName = className && customClassNames(className,'body');
        const styles = stylesheet({open})
        return <div 
                 className={cx(css(styles.overlay), overlayClassName)}
                 onClick={backClosable ? this.handleOverlayClick : null}
               >
                    <article 
                      className={cx(css(styles.content), contentClassName)}>
                        <header 
                          className={cx(css(styles.header), headerClassName)}>
                            { headerChildren ? headerChildren : 
                                <span>{title}</span>
                            }
                            <span 
                              className={cx(css(styles.close), closeClassName)} 
                              onClick={onClose}>×</span>
                        </header>
                        <div 
                          className={cx(css(styles.body), bodyClassName)}>
                            {children}
                        </div>
                    </article>
                </div>
    }
}

export default ModalPresenter