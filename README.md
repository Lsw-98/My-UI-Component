# 封装组件
在每个文件夹下的demos中展示了如何使用封装的UI组件

# 封装Button
封装了六种按钮，分别是：
- 状态颜色改变的主题按钮
- 不同尺寸的按钮
- 圆形字体按钮
- 禁用状态按钮
- 虚线按钮
- 加载状态按钮

# 封装输入类UI组件
##  Input
封装了五种输入框，分别是：
- 基本输入框
- 密码框
- 数字狂
- 可清空输入框
- 多场景输入框

|  Name   | Description  | Type |  Default | 
|  ----  | ----  | ----  | ----  |
|  width | 自定义宽度 | string | 170px |
|  moreStyle | 自定义样式 | object | {} |
|  type | 输入框类型  | string | text |
|  placeholder | 提示 | string | '' |
|  showClear | 显示清空按钮 | boolean | false |
|  showTogglePwd | 显示密码切换按钮(需同时设置type="password") | boolean  | false |
|  min | 数字框最小值 | number | '' |
|  max | 数字框最大值 | number | '' |
|  step | 数字框递增/减的值 | number | 1 |
|  handleIptChange | 输入框内容改变回调 | Function | -- |
|  handleIptFocus | 输入框聚焦回调 | Function | -- |
|  handleClick | 输入框点击回调 | Function | -- |
|  handleIptBlur | 输入框失去焦点回调 | Function | -- |
|  handleKeyDown | 输入框键盘监听 | Function | -- |
|  handleNumChange | 数字框内容改变回调 | Function | -- |
|  clearCallback | 清空回调 | Function | -- |
|  defaultValue | 默认内容 | string & (string \| number \| readonly string[]) | -- |

## Select下拉菜单
封装了五种类型的下拉菜单，分别是：
- 基本下拉菜单
- 被禁用的下拉菜单
- 处于加载状态的下拉菜单
- 单独选项禁用的下拉菜单
- 可输入的下拉菜单

|  Name   | Description  | Type |  Default | 
|  ----  | ----  | ----  | ----  |
|  width | 自定义宽度 | Number | 80px |
|  option | 选择器数据 | Options[] | [] |
|  disabled | 禁用状态  | Boolean | false |
|  placeholder | 提示 | string | false |
|  loading | 加载状态 | boolean | false |
|  showSearch | 可输入状态 | boolean  | false |
|  clearable | 可输入状态下清除 | Boolean | false |
|  handleSelectCallback | 选择后的回调 | Function | {} |
|  handleTextChange | 输入后的回调 | Function | {} |
