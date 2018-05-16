import React from 'react';


export default class RefSample extends React.Component {
	constructor(props) {
		super(props);
		// Creating Refs
    // React.createRef(); 로 생성
		this.myRef = React.createRef();
	}

	render() {
	  // ref의 값은 노드 유형에 따라 다르다.
    // HTML요소에서 ref 특성을 사용하면 기본 DOM 요소를 받는다.
    // ref 속성이 사용자 정의 클래스 구성 요소에 사용되면 ref 객체는 현재 마운트 된 구성 요소의 인스턴스를 받는다.
    // functional components 에는 인스턴스가 없기에 ref 속성 사용 불가.
	  const node = this.myRef.current;

		return (
			<div
        ref={this.myRef}
      >

      </div>
		);
	}
}