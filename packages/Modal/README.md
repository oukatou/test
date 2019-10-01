# Modal

It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it.

## Getting started

### Install the package

```bash
npm install whd-modal
```

### Import the component

```js
import Modal from 'whd-modal';
```

## Basic usage

```jsx
<Modal 
    title="title" 
    open={this.state.open}
    className='customClass' 
    headerChildren={headerChildren}
    onClose={this.onClose}
    mask={true}
    keyboard={false}
    backClosable={false}
>
    <p> 
        A modal is an overlay that focuses the customer's attention on a single task or set of controls. 
    </p>
</Modal>
```
**Props**

- `title` \(string\): Title.
- `open` \(boolean\): Whether the modal is visible or not.
- `className` \(string\): className of container.
- `mask` \(boolean\): Whether show mask or not.
- `backClosable` \(boolean\):Whether to close the modal when the area outside the modal is clicked.
- `keyboard` \(boolean\): Whether support press esc to close.
- `headerChildren` \(node\): Supports adding any dom content to the header of the modal.
- `onClose` \(function\): Trigger when you click the close button.

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.