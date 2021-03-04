# 携程移动端 flex

### 循环精灵图
![](./images/localnav.png)
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
```css
background: -webkit-linear-gradient(left, red, blue)
```