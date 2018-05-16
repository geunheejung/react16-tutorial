import React from 'react';
import RefSample from './components/RefSample';
import CustomTextInput from './components/CustomTextInput';
import AutoFocusTextInput from './components/AutoFocusTextInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.childRef = React.createRef();
  }

  render() {
    console.log(this.childRef);
    return (
      <div>
        <RefSample
          ref={this.childRef}
        />
        <CustomTextInput/>
        <AutoFocusTextInput/>
      </div>
    );
  }
}