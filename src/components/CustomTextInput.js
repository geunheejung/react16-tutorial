import React from 'react';


export default class CustomTextInput extends React.Component {
	constructor(props) {
		super(props);

		this.textInput = React.createRef();

	}

	focusTextInput = () => {
	 // DOM API를 사용하기위해 ref로 DOM요소에 직접 접근
   // "current" key에 DOM node값이 담겨있음
   this.textInput.current.focus();
  }

	render() {
    // React는 구성 요소가 마운트 될 때 DOM 요소로 현재 등록 정보를 할당하고 마운트 해제시 다시 null에 할당
    // ref 업데이트는 componentDidMount, componentDidUpdate 라이프 사이클 후크 전에 발생
		return (
			<div>
        <input
          type="text"
          ref={this.textInput}
        />
        {', '}
        <input
          type="text"
          defaultValue="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
		);
	}
}
/*
ERROR!!:
Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
onChange 이벤트 핸들러 없이는 input value의 값을 변경할 수 없음. readonly
기본 값을 설정하고 싶으면 defaultValue로 정해줘야함.
<input
  type="text"
  value="Focus the text input"
  onClick={this.focusTextInput}
/>
 */
