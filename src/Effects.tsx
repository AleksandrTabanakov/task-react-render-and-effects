import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';
/*
1. Постройте компонент, выводящий информацию об источнике. Он будет получать проп `sourceId: string`.

Информация должна выводиться в следующем виде:

```html
<Название>: <последнее_сообщение>
```

> После смены источника считается, что сообщений от него ещё не было. В этом случае нужно выводить

```html
<Название>: -1
```

2. Подпишитесь на изменение статуса пользователя с помощью метода `subscribe(id, callback)`. В обработчик будет приходить новое сообщение, который нужно отрисовать.
3. При изменении пользователя нужно отписываться от изменения его статуса с помощью `unsubscribe(id, callback)`.
    > Функции `subscribe(id, callback)` и `unsubscribe(id, callback)` нужно импортировать из `src/resources/API.ts`
*/
export function Effects(props: { sourceId: string }) {
    const [Count, setCount] = useState(-1);
    const callback = (nmr: number) => {
        setCount(nmr);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);
        const otpiska = () => {
            unsubscribe(props.sourceId, callback);
            setCount(-1);
        };
        return otpiska;
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {Count}
        </div>
    );
}
