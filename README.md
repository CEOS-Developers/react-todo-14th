### 들어가며

앞서 바닐라 JS 과제에서는 전역 상태 관리 기능을 구현하지 않아서 부모 컴포넌트에 자식 컴포넌트들 간 의존하고 있는 state을 두어 이를 자식들에게 props로 넘겨주는 전통적인 React의 **State 끌어올리기** 방식을 사용했습니다. [참고 - State 끌어올리기](https://ko.reactjs.org/docs/lifting-state-up.html)

따라서 이번에 React로 todo list 를 구현할 때에는 **전역 상태 관리 기능 구현**에 집중해보기로 했습니다.

전역 상태 관리 기능은 **[recoil의 Atoms](https://recoiljs.org/docs/introduction/core-concepts)** 에서 아이디어를 얻었습니다.

### 신경 쓴 포인트

- 디렉토리 구조 :

  - 이전까지는
          -components

          -redux

          -pages

          -hooks

  지금까지는 이런 식으로 개발자의 입장에서 **코드의 역할, 계층**을 기준으로 패키지 구조를 가져갔다면,

- 이번에는 아래와 같이 어플리케이션의 각 기능을 기준으로 패키기 구조를 가져가보기로 했습니다.
        -@shared (어플리케이션 공통으로 쓰이는 것들)

            -components

            -hooks

            -api

        -todo-list

            -components

            -hooks

            -api

        -login

            -components

            -hooks

            -api

        -logout

        -user
  ...

이렇게 하면 코드를 수정할 때 디렉토리를 여러 군데 옮겨 다니면서 작업하지 않아도 되는 장점이 있습니다!

기존의 코드 역할 기준 패키지 구조는 특정 기능을 리팩토링할 때 여러 디렉토리를 거쳐가며 수정해야 했기에 번거로웠습니다.

⇒ todo list 기능을 위한 코드가 components, redux, hooks 등 여러 디렉토리에 나뉘어 있기 때문..

[패키지 구조 관련 참고 글](https://ahnheejong.name/articles/package-structure-with-the-principal-of-locality-in-mind/)

사실 장단점을 느낄 수도 없을 만큼 작은 프로그램이라 그냥 패키지 만들어 보는 연습 삼아 해봤습니다,,,

- 전역 상태 관리 :

  React 에서 제공하는 Custom Hook과 JS의 Class 기능을 사용했습니다.

  ⇒ Custom Hook과 전역 상태를 가지는 객체로 구현했기 때문에 Redux 의 Store 개념이 아니라 Recoil 의 **Atom** 이라고 생각하는 게 편할 것 같습니다.. (상황에 맞게 큰 store 객체를 여러 atom 객체로 나눌 수 있기에)

  어쨌거나,,

  전역 상태 관리용 store 객체는

  1. 상태 가져오기 (getState)
  2. 상태 변경하기 (setState)
  3. 변경된 상태에 반응하여 업데이트하기

  기능이 필요합니다.

  원래 목표했던 바는 아래와 같습니다.

< 전역 상태를 가지는 atom 객체(store) 에서 상태를 가져오는 getter 함수와 상태를 업데이트하는 setter 함수를 Custom Hook을 통해 컴포넌트가 사용하도록 해보자.>

### 그러나...

급하게 구현하려고 하기도 했고, 변경된 상태에 반응하여 업데이트하는 부분에서 에러가 많이 나왔습니다.

그래서 관련 구현 코드도 보고 그랬지만,, 생각보다 사람들은 전역 스토어 구현에 큰 관심이 없어 보였고,,,, 설명도 부족해서 코드 이해 부족으로 에러 핸들링도 어려웠던 것 같습니다 ㅜ.ㅜ

처음에 atom 객체를 일반 객체로 만들었다가, 함수로 만들어서 객체를 리턴했다가, `new Function()` 으로도 만들어봤는데 결국 클래스로 구현했습니다.. 역시 클래스가 '구현'에 있어서는 정말.. 좋은 것 같습니다.

어쨌거나 성공한 줄 알았는데 몇 번 테스트 해보니 대기리스트와 완료리스트 간 아이템 삭제 및 status 변경에서 계속 오류가 납니다,, ㅜㅜ

자료구조 수업때부터 느꼈지만 구현은 정말 어려운 것 같습니다 ㅠ~~~

~~그냥 context 쓸 걸 ... 하지만 너무 맘에 안 들었는 걸,,,ㅎ,,,~~

### 문제 해결

오류 수정 전에 Atom 코드에서 custom hook의 상태를 리턴을 해줬는데,
**Custom Hook 의 상태는 해당 훅을 구독하는 컴포넌트끼리 공유되지 않기 때문**에 오류가 났었습니다.
그래서 전역 상태를 가지는 Atom의 state을 반환시켜줬더니,, 잘 되네요 ㅎ...
