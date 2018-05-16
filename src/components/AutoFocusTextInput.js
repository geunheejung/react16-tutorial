import React from 'react';
import CustomTextInput from './CustomTextInput';


export default class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      // CustomTextInput이 class로 선언되었을 경우에만 작동.
      <CustomTextInput
        ref={this.textInput}
      />
    );
  }
}