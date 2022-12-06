# 这是 <h1> 一级标题
## 这是 <h2> 二级标题
### 这是 <h3> 三级标题
#### 这是 <h4> 四级标题
##### 这是 <h5> 五级标题
###### 这是 <h6> 六级标题
---

# 这个标题拥有 1 个 id {#my_id}

# 这个标题有 2 个 classes {.class1 .class2}
---

*这会是 斜体 的文字*
_这会是 斜体 的文字_

**这会是 粗体 的文字**
__这会是 粗体 的文字__

_你也 **组合** 这些符号_

~~这个文字将会被横线删除~~

==这个文字将会被标记==

---

- Item 1
- Item 2
  - Item 2a
  - Item 2b
---

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
---

![GitHub Logo](./images/logo.jpg)
Format: ![Alt Text](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3000368218,295699058&fm=26&gp=0.jpg)
---


https://github.com - 自动生成！
[GitHub](https://github.com)

---

正如 Kanye West 所说：

> We're living the future so
> the present is our past.

---

我觉得你应该在这里使用
`<addr>` 才对。

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---


```javascript {.class1 .class}
function add(x, y) {
  return x + y
}
```

```javascript {highlight=1}
console.log('demo')
console.log('demo')
console.log('demo')
```

```javascript {highlight=1-2}
console.log('demo')
console.log('demo')
console.log('demo')
```

```javascript {highlight=[1-10,15,20-22]}
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
console.log('demo')
```

---

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

---

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

:smile:
:fa-car:

---

30^th^
H~2~O
Content [^1]

[^1]: Hi! This is a footnote

---

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.


--- 

├── dist
│   ├── index.html
│   ├── js
│   │   ├── es5-polyfill.js
│   │   ┕└── index.js
│   ├── test
│   │   ├── index.html└┕
│   │   ├── toolbar.html
│   │   └── toolbar.js
│   └── tools
│       └── toolbar.js
├── gulpfile.js
├── package.json

└┤
┕ ┖┗┘┙┚┛┍┎┏┐┑┒┓
ο│└ο│ο├│ο╞
.L├□│ㄈ┤ ├
├—┬├┬┐╯┼┼┌┼╮
├┬┬┬┬┐ ┌┼┼┼┼┐ ┌┴┴┴┴┐ ┌╯┐┌ ┼┐ —┤┴┼┐ —╯ ┌┐└┘