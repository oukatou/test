import React,{Component} from 'react'
import stylesheet from './Modal.stylesheet'
import {css,cx} from 'emotion'

function customClassNames(cls,name){
    return cls.split(' ').reduce((res,cur)=>{
        res && (res +=' ')
        return res + cur + '__' + name
    },'')
}
class ModalPresenter extends Component{
    static defaultProps = {
        mask: true,
        keyboard: true,
        open: false
    }
    onClose=this.props.onClose
    handleOverlayClick=(e)=>{
        if(e.target == e.currentTarget){
            this.onClose()
        }
    }
    overlayRef
    contentRef
    componentDidUpdate(){
        this.contentRef.focus()
    }
    refOverlay= overlayRef =>{
        this.overlayRef = overlayRef
    }
    refContent=contentRef=>{
        this.contentRef = contentRef
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
                mask,
                keyboard,
                open
              } = this.props;
        const overlayClassName = className && customClassNames(className,'overlay');
        const contentClassName = className && customClassNames(className,'content');
        const headerClassName = className && customClassNames(className,'header');
        const closeClassName = className && customClassNames(className,'close');
        const bodyClassName = className && customClassNames(className,'body');
        const styles = stylesheet({open, mask})
        return <div 
                 ref={this.refOverlay} 
                 className={cx(css(styles.overlay), overlayClassName)}
                 onClick={keyboard ? this.handleOverlayClick : null}
               >
                    <article 
                      ref={this.refContent} 
                      tabIndex='-1' 
                      className={cx(css(styles.content), contentClassName)} 
                      onKeyUp={this.handleKeyup}
                    >
                        <header className={cx(css(styles.header), headerClassName)}>
                            {headerChildren ? headerChildren : 
                                <span>{title}</span>
                            }
                            <span className={cx(css(styles.close), closeClassName)} onClick={onClose}>×</span>
                        </header>
                        <div className={cx(css(styles.body), bodyClassName)}>
                            {children}
                        </div>
                    </article>
                </div>
    }
}

export default ModalPresenter