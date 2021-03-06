# React Study 

### Ref

#### Callback Refs

React에서 직접 DOM에 해야할 때 사용됩니다.
ex)
1. input / textarea 등에 포커스를 해야 할때
2. 특정 DOM 의 크기를 가져와야 할 때
3. 특정 DOM 에서 스크롤 위치를 가져오거나 설정을 해야 할 때
4. 외부 라이브러리 (플레이어, 차트, 캐로절 등) 을 사용 할 때

ref라는 속성이 존재하며, 사용방법은 

input = null;
<input
    ref={ref => {
        this.input = ref;
    }}
/>

이렇게 해주면 this.input으로 바로 input요소에 접근이 가능합니다.

부모 구성요소에서 자식 구성요소의 DOM 요소에 접근하는 것은 권장되지 않은 방식이다.
컴포넌트 캡슐화를 깨트림.

부모 컴포넌트에서 자식 컴포넌트에 접근해서 캡슐화를 깨트린다는거 같다.
각각의 컴포넌트는 props로 교류하며, 컴포넌트를 사용할 때 그 컴포넌트에 대해서 자세히 알필요가없는데 ref로 인해 알아야됨.


ref 참조값을 props로 전달해주면 해결 가능

DOM 노드를 가능한 노출하지 말 것을 권장한다.
만일 하위 구성 요소를 완전히 제어 할 수 없을 경우 findDOMNODE() 를 사용하는것을 권장.

주의사항
ref 콜백이 인라인 함수로 정의 된 경우 업데이트 도중 두 번 호출된다.
1. 첫 호출 - null 반환
2. 두번째 호출 - DOM 요소가 다시 호출된다
이러한 이유는 함수의 새 인스턴스가 각 렌더링과 함께 만들어지기 때문에 React가 이전 ref를 지우고 새 ref를 설정

#### String Refs ( 권장하지 않는 방법 )

this.refs 로 직접 접근

#### React.createRef(); - react 버전 16이상 

ref를 사용하고 싶은 변수에 React.createRef(); 를 호출하여 셋팅해주고 함수형 컴포넌트를 제외한 요소의 
ref 속성값으로 설정해주면 된다.