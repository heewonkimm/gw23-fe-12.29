# 프론트엔드 가이드

## 기본정보
### 브라우저 지원범위
- **Chrome, Edge** : 118+
- **Opera**: 103+
- **Safari** : 16+
- **Firefox** : 미지원
- **iOS** : 16+ (safari 16+)
- **Android** : 13+ (samsung 22+, chrome 119)

## 개발환경

### 설치

**node.js**  
[node.js 웹사이트(https://nodejs.org/)](https://nodejs.org/)에서 다운로드 후 설치  
(구축 시점에 사용된 node.js 버전은 v18.16.0)

**Install**  
package.json이 있는 프로젝트 폴더에서 명령프롬프트를 열고 아래 명령을 실행하면 프로젝트에 필요한 모듈이 설치.

```bash
npm install
```

### 실행

아래 명령을 실행하면 개발 로컬서버가 구동되면서 http://localhost:4000/ 또는 네트워크에서 http://컴퓨터IP:4000/ 으로 접속 가능.  
(로컬에 백엔드환경과 구동이 되어야 정상작동 가능)

```bash
npm run dev
npm run storybook // port: 4010
```

### 저장소
- **main**: 운영서버 브랜치
- **dev**: 개발서버 브랜치
- **[작업자이름]**: dev 브랜치 기준의 작업자별 개인 브랜치
> **개인 브랜치 생성**  
> 1. CLI  
> ```cmd
> git checkout dev
> git checkout -b <작업자이름>
> git push origin <작업자이름> 
> ```
> 2. gitlab 웹페이지  
> 2-1. 해당 저장소의 gitlab페이지에서 '+ 드롭다운메뉴'의 'New branch'를 선택한다.  
> 2-2. 생성할 브랜치의 이름을 입력하고, 기준이 되는 dev 브랜치를 선택 후 생성한다.  

> **개인 브랜치 dev내역 가져오기**  
> ```cmd
> git checkout <작업자이름>
> git pull origin dev
> ```

## 스타일 가이드

### CSS 변수

관리차원으로 CSS 속성값의 일관성을 위해 **CSS변수로 정의된 속성은 반드시 CSS변수를 사용**한다.  
**export 되어 있는 colors객체는 속성값을 통해 계산이 필요할 때만 사용해야 한다.**

```js
export const colors = {
  success: '#24D164',
  warning: '#F6A723',
  error: '#f44336',
  white: '#fff',
  dim: {
    value: '15, 23, 42',
    opacity: '0.45',
  },
  primary: {
    900: '#1E3A8A',
    800: '#1E40AF',
    700: '#1D4ED8',
    600: '#2563EB',
    500: '#3B82F6',
    400: '#60A5FA',
    300: '#93C5FD',
    200: '#BFDBFE',
    100: '#DBEAFE',
    50: '#EFF6FF',
  },
  greyscale: {
    900: '#0F172A',
    800: '#1E293B',
    700: '#334155',
    600: '#475569',
    500: '#64748B',
    400: '#94A3B8',
    300: '#CBD5E1',
    200: '#E2E8F0',
    100: '#F1F5F9',
    50: '#F8FAFC',
  },
};

const variables = css`
  :root {
    --icon-color: ${colors.greyscale['500']};

    --success-color: ${colors.success};
    --warning-color: ${colors.warning};
    --error-color: ${colors.error};
    --white-color: ${colors.white}; // 배경 기본 흰색
    --dim-color: rgba(${colors.dim.value}, ${colors.dim.opacity});
    --primary-900-color: ${colors.primary['900']};
    --primary-800-color: ${colors.primary['800']};
    --primary-700-color: ${colors.primary['700']};
    --primary-600-color: ${colors.primary['600']}; // 기본 Primary
    --primary-500-color: ${colors.primary['500']};
    --primary-400-color: ${colors.primary['400']};
    --primary-300-color: ${colors.primary['300']};
    --primary-200-color: ${colors.primary['200']};
    --primary-100-color: ${colors.primary['100']};
    --primary-50-color: ${colors.primary['50']};
    --greyscale-900-color: ${colors.greyscale['900']}; // 텍스트 기본 검정색
    --greyscale-800-color: ${colors.greyscale['800']};
    --greyscale-700-color: ${colors.greyscale['700']};
    --greyscale-600-color: ${colors.greyscale['600']};
    --greyscale-500-color: ${colors.greyscale['500']}; // 텍스트 기본 회색
    --greyscale-400-color: ${colors.greyscale['400']}; // 텍스트 비활성화 회색
    --greyscale-300-color: ${colors.greyscale['300']};
    --greyscale-200-color: ${colors.greyscale[
      '200'
    ]}; // 선 기본 회색 (테두리관련)
    --greyscale-100-color: ${colors.greyscale[
      '100'
    ]}; // 선 기본 회색2 (구분선관련)
    --greyscale-50-color: ${colors.greyscale['50']}; // 배경 기본 회색
  }
`;
```

### 사이즈 단위(rem)

반응형에 대응하기 위해 사이즈에 해당하는 모든 단위는 rem으로 사용한다.  
root의 폰트사이즈는 62.5%(10px)로 1rem으로 입력시 10px로 표현된다.

```js
// ./src/components/Theme.jsx
const base = css`
  html {
    font-size: 62.5%; // 10px
  }
  @media (width <= 1024px) {
    html {
      font-size: 54.6875%; // 8.75px
    }
  }
  // ...
`;
```

### 상황별 스타일링

#### 1. 새로운 컴포넌트

Emotion styled 방식 또는 Emotion css 방식으로 스타일링한다. (**Emotion styled 방식 권장**)

```js
// Emotion styled 방식
import styled from '@emotion/styled';

const List = styled.ul`
  // ...
`;

const Item = styled.li`
  color: ${({ isActive }) => isActive ? '#000' : '#fff'};
  // ...
`;

const Component = () => {
  return (
    <List>
      <Item isActive={isActive} />
    </List>
  );
}

// Emotion css 방식
import { css } from '@emotion/react';

const styles = {
  list: css`
    // ...
  `,
  item: ({ isActive }) => css`
    color: ${isActive ? '#000' : '#fff'}
  `,
};

const Component = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item({ isActive })}></li>
    </ul>
  );
}
```

#### 2-1. Antd 컴포넌트 재정의 (Global 재정의)

Antd에서 전역적으로 스타일 재정의는 **Design Token 값을 변경**하거나 **Antd 컴포넌트의 Class Selector를 통해 스타일링**하는 방법들이 있다.  
Antd 컴포넌트의 스타일을 재정의할 때는 Component Token에서 원하는 속성을 찾아 값을 할당하여 재정의하고, 원하는 속성이 없을시 해당 컴포넌트의 Class Selector를 통해 재정의한다.  
(Class Selector로 스타일을 재정의할 때 우선순위를 높이기 위해 Antd의 Root Selector인 '.ant-app'를 거쳐서 스타일링해야한다.)  
**_Antd 컴포넌트의 스타일 재정의는 지양한다._**

> **Design Token이란**  
> [Design Token](https://ant.design/docs/react/customize-theme)에는 Seed Token, Map Token 등이 존재하는데, Antd 자체 알고리즘계산법으로 Seed Token을 통해 Map Token을 생성, Map Token을 통해 Alias Token을 생성, 모든 Token을 통해 Component Token이 생성되어 스타일이 결정된다.
>
> - Design Token API: https://ant.design/docs/react/customize-theme#api
> - Component Token API: 각 컴포넌트 API 페이지 하단에 명시되어 있음.

```js
// ./src/components/Theme.jsx

// Class Selector로 재정의
const globalStyles = css`
  // ...

  // Antd 재정의
  .ant-app {
    // Button 재정의
    .ant-btn {
      min-width: 90px;
    }
  }

  // ...
`;

// Token으로 재정의
const theme = {
  // Components Token
  components: {
    Button: {
      defaultColor: '#000',
      // ...
    },
  },
};

const Theme = ({ children }) => {
  return (
    <ConfigProvider theme={theme}>
      <App {...appConfig}>
        <Global styles={globalStyles} />
        {children}
      </App>
    </ConfigProvider>
  );
};
```

#### 2-2. Antd 컴포넌트 재정의 (Local 재정의)

페이지별 Antd 컴포넌트 재정의와 Antd 컴포넌트를 활용한 컴포넌트 생성할 때의 재정의는 **Emotion css 방식**으로 '.ant-app'를 거쳐서 재정의한다.  
**_Antd 컴포넌트의 스타일 재정의는 지양한다._**

```js
import { css } from '@emotion/react';

const antdComponent = css`
  .ant-app & {
    color: #000;
    // ...
  }
`;

const Component = () => {
  return <AntdComponent className={antdComponent} />;
};
```

#### 3. inline style 방식

동적 스타일 또는 현재 작업중인 페이지에서만 필요한 사소한 스타일링을 위해 사용한다.

```js
return (
  <Component
    style={{
      marginTop: 10,
      opacity: isOpen ? 1 : 0,
    }}
  />
);
```

## 컴포넌트 관리

- 최대한 Antd 컴포넌트를 활용하며 새로 생성하는 컴포넌트 또한 Antd 컴포넌트를 활용하여 생성한다.
- components(./src/components)의 디렉토리 구조는 stories(./src/stories)의 디렉토리 구조와 동일하게 관리한다.
- 새로 생성된 컴포넌트는 Storybook에 기록해야하며, Storybook에 없는 기존 컴포넌트의 기능 및 속성은 구현을 한 뒤에 Storybook에도 추가 기록을 한다.

## Storybook 작성

- Storybook은 기본 컴포넌트와 그 하위에 존재하는 Story들로 구성된다.
- 디렉토리 구조(./src/stories)는 2뎁스 까지만 파일을 생성해서 작성한다. 그 외의 추가적인 구분이 필요할 경우 Storybook 내부에서 확인할 수 있게 한다.
- Antd 컴포넌트와 각 컴포넌트 내부의 속성 API를 기준으로 작성한다. 다만 Style 관련된 속성은 따로 적용하지 않는다.
- Storybook으로 표현 시, 입력하지 않아도 적용되는 props가 code에 보이는 경우가 있는데 이때 defaultProps를 작성해 가려준다.

```js
Calendar.defaultProps = {
  mode: 'month',
};
```

- **_Storybook은 overview 에서 show code 했을 때 최대한 작성한 내용 그대로 보이는 것을 기준으로 작성된다._**
  - 작성할 컴포넌트가 Antd 컴포넌트의 자식 컴포넌트일 경우 코드에 제대로 보이지 않으니 DisplayName 으로 명시해 주어야 한다.
  - Storybook에 작성되는 컴포넌트는 props를 전달 받으면 내부에 작성한 변수, 함수 등이 제대로 show code기능에 제대로 보이지 않으니 주의한다.
  - Storybook에서 제공하는 render 함수를 통해 컴포넌트를 렌더링 할 경우, 내부에 작성한 변수, 함수 등이 제대로 show code기능에 제대로 보이지 않으니 주의한다.
  - 스타일은 최대한 디자인 토큰에서 전달하는 스타일을 그대로 표현하고, 표현력이 너무 떨어질 경우에만 따로 style prop을 전달한다.

### 1. 기본 컴포넌트 설정

각 파일에서 export default 한 컴포넌트가 기본 컴포넌트로 지정된다. 기본 컴포넌트는 해당 컴포넌트의 가장 기초적인 상태를 보여주며, 최대한 모든 속성을 Storybook 컨트롤러로 실시간 수정, 비교가 가능하도록 작성한다.

기본 컴포넌트에 전달 하는 주요 props는 다음과 같다.

- title: Storybook 내부의 디렉토리 구조 작성.
- component: 따로 Default 컴포넌트를 작성하지 않았을 때, 적용되는 컴포넌트 객체 지정.
- argTypes: 해당 컴포넌트에 들어갈 props를 작성한다.
  - argTypes에 내용이 작성되어 있어야 기본 컴포넌트 실시간 수정 기능 사용이 가능하다.
  - 작성은 꼭 해당 컴포넌트의 공식 문서를 참조해야 한다. (속성의 기본값, 최솟값, 최댓값 등)
  - 작성한 props에 대한 사용 방법이 Storybook 기본 기능으로 표현되지 않을 경우에는 description을 활용해 전달한다.
- args: argTypes에 입력한 속성에 대해 기본으로 표현하고 싶은 값 지정.

```js
export default {
  title: 'ContentDisplay/Calendar',
  component: Calendar,
  argTypes: {
    mode: {
      control: 'select',
      options: ['month', 'year'],
      defaultValue: {
        summary: 'month',
      },
    },
  },
  args: {
    mode: 'month',
  },
};
```

#### 1-1. 커스텀 훅 작성

기본 컴포넌트에서 사용해야만 하는 객체 혹은 함수가 있는 경우, 코드 표현과 하위 Story에서의 재사용성을 위해 커스텀 훅을 만들 필요가 있다. 예시는 autoComplete 컴포넌트를 표현하기 위해 만든 커스텀 훅이다.

```js
import { useState } from 'react';

const useAutoComplete = () => {
  const [options, setOptions] = useState([]);

  const onSearch = text => {
    const mockVal = (str, repeat = 1) => ({
      value: str.repeat(repeat),
    });

    const getPanelValue = searchText =>
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    setOptions(getPanelValue(text));
  };

  return [options, onSearch];
};

export default useAutoComplete;
```

이렇게 기능에 필요한 객체와 함수를 return 하게 만들면 Storybook 에서의 코드 표현이 훨씬 간결해진다.

### 2. 하위 Story 작성

하위 Story 속성이 적용된 컴포넌트의 UI를 한눈에 보여주는 목적과, 컴포넌트의 응용방식을 보여주기위한 목적으로 작성한다.
컴포넌트에 대한 여러 가지 경우를 보여주기 때문에 기본 컴포넌트와는 다른 변수(상태), 함수 등이 사용될 수 있다.

- **하위 Story에는 데이터를 표현하기 위한 배열 객체나, placeholder 등 정적인 값이 아닌 props를 전달하지 않는다.**
  위에서 설명한 대로 show code 실행 시 코드가 정상적으로 노출되지 않기 때문이다. 또한 속성 값에 따라 달라지는 UI를 보여주기 위해 다른 속성값을 가진 동일한 컴포넌트를 함께 작성하는 경우도 있어서 같은 값의 prop을 내려 받으면 안된다.
- 기본 컴포넌트의 props를 전달 받지 않기 때문에, Storybook 컨트롤러를 통한 실시간 수정은 불가하다.

## 네이밍 규칙
- **모든 폴더명**은 카멜케이스
- **컴포넌트** 파일명과 함수명은 파스칼케이스
- **util함수 및 custom hook**과 같은 기능, 로직에 해당하는 파일명과 함수명은 카멜케이스
- **페이지** 파일명은 카멜케이스, 함수명은 파스칼케이스