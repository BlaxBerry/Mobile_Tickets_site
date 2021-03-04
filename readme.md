# Mobile Ticket Site
![](./screenshot.png)


### FLex Layout
![](./images/screenshort.png)


### FOR Loop and Function
```js
 function changeSpritesPosition(className) {
        let pics = document.querySelectorAll(className);

        for (let i = 0; i < pics.length; i++) {

            let index = i * pics[i].offsetHeight;
        
            pics[i].style.backgroundPosition = `0 ${-index}px`;
        }
    };

    changeSpritesPosition('.icon-pic')
```

### 背景色线性渐变
![](https://ferret.akamaized.net/images/5a1a5bc77f58a840d3000384/original.png?1511676870)
```css
background: -webkit-linear-gradient(left, orange, purple)
```