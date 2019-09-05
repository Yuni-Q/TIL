# 특정 버튼을 눌러서 이벤트를 발생 시키기

```javascript
import * as React from "react";
import { useEffect } from 'react';
import * as Mousetrap from 'mousetrap';

const useShortcut = (combination, handler) => {
  useEffect(() => {
      mousetrap = new Mousetrap(document.body)
      mousetrap.bind(combination, () => handler())
    return () => {
      mousetrap && mousetrap.unbind(combination)
    }
  }, [])
}

const Button = props => {
  const { isSubmitable, onSubmit } = props;
  
  useShortcut('alt+s', () => isSubmitable && onSubmit());

  return (
    <button 
      htmlType="submit" 
      size="large" 
      type="primary"
      disabled={!isSubmitable}
      onMouseDown={() => onSubmit()}
    />
  )
};

export default Button;
```