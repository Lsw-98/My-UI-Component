import React, { FC, useState, useMemo, memo } from 'react'
import { CloseOutlined, EyeOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import './index.css';

interface InputProps {
  /**
   * @description 自定义宽度
   * @default 170px
   */
  width?: string
  /**
   * @description 自定义样式
   * @default {}
   */
  moreStyle?: object
  /**
   * @description 输入框类型
   * @default text
   */
  type?: string
  /**
   * @description 输入框提示
   * @default ''
   */
  placeholder?: string
  /**
   * @description 显示清空按钮
   * @default false
   */
  showClear?: boolean
  /**
   * @description 显示密码切换按钮(需同时设置type="password")
   * @default false
   */
  showTogglePwd?: boolean
  /**
   * @description 数字框最小值
   * @default ''
   */
  min?: number
  /**
   * @description 数字框最大值
   * @default ''
   */
  max?: number
  /**
   * @description 数字框递增/减的值
   * @default 1
   */
  step?: number
  /**
   * @description 输入框内容改变回调
   */
  handleIptChange?: Function
  /**
 * @description 输入框聚焦回调
 */
  handleIptFocus?: Function
  /**
   * @description 输入框点击回调
   */
  handleClick?: Function
  /**
   * @description 输入框失去焦点回调
   */
  handleIptBlur?: Function
  /**
   * @description 输入框键盘监听
   */
  handleKeyDown?: Function
  /**
   * @description 数字框内容改变回调
   */
  handleNumChange?: Function
  /**
   * @description 清空回调
   */
  clearCallback?: Function
  /**
   * @description 默认内容
   * @default ''
   */
  defaultValue?: string
}

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>  // 原生Input接口
const Input: FC<InputProps & NativeInputProps> = (props) => {
  const {
    width,
    moreStyle,
    type,
    placeholder,
    showClear,
    showTogglePwd,
    min,
    max,
    step,
    handleIptChange,
    handleKeyDown,
    handleIptFocus,
    handleClick,
    handleIptBlur,
    handleNumChange,
    clearCallback,
    defaultValue,
  } = props;
  const [iptValue, setIptValue] = useState<string | number>(defaultValue || '');
  const [pwdIptState, setPwdIptState] = useState(true); //密码框切换状态

  const changIpt = (e: any) => {
    // 改变文本框
    if (moreStyle && Object.keys(moreStyle).includes('caretColor')) {
      return
    }
    setIptValue(e.target.value)
    if (handleIptChange) {
      handleIptChange(e.target.value)
    }
  }

  const blurIpt = (e: any) => {
    // 失去焦点
    if (type === 'num' && isNaN(Number(iptValue))) {
      // 当时去焦点置文本框为空
      setIptValue('')
    }
    handleIptBlur && handleIptBlur()
  }

  const focusIpt = () => {
    handleIptFocus && handleIptFocus(iptValue);
  };

  const iptHandleClick = () => {
    handleClick && handleClick();
  };

  const addNum = () => {
    // 首先判断是否为数字
    if (type === 'num' && isNaN(Number(iptValue))) {
      return setIptValue('')
    }

    const stepNum = step || 1

    // 如果超过了最大值，就显示为最大值
    if (step && max && Number(iptValue) + stepNum > max) {
      handleNumChange && handleNumChange(max)
      return setIptValue(max)
    }

    // 如果超过了最小值，就显示为最小值
    if (step && (min === 0 || min) && Number(iptValue) + stepNum < min) {
      handleNumChange && handleNumChange(min)
      return setIptValue(min)
    }

    // 
    handleNumChange && handleNumChange(Number(iptValue) + stepNum)
    setIptValue(Number(iptValue) + stepNum)
  }

  const lowNum = () => {
    if (type === 'num' && isNaN(Number(iptValue))) {
      return setIptValue('')
    }

    const stepNum = step || 1

    if (step && (min === 0 || min) && Number(iptValue) - stepNum < min) {
      handleNumChange && handleNumChange(min);
      return setIptValue(min);
    }

    handleNumChange && handleNumChange(Number(iptValue) - stepNum);
    setIptValue(Number(iptValue) - stepNum);
  }

  // 判断输入框的类型
  const iptType = useMemo(() => {
    if (showTogglePwd && type === "password") {
      return pwdIptState ? 'password' : 'text'
    }
  }, [type, showTogglePwd, pwdIptState])

  // 得到输入框样式
  const exticStyle = useMemo(() => {
    let style = { width: '170px' };
    if (width) {
      style.width = width + 'px';
    }
    return { ...style, ...moreStyle };
  }, [width, moreStyle]);

  return (
    <div className='box' style={{ width: width ? width + 'px' : '170px' }}>
      <input
        className='input'
        style={exticStyle}
        type={iptType}
        placeholder={placeholder}
        value={defaultValue || iptValue}
        onChange={changIpt}
        onBlur={blurIpt}
        onFocus={focusIpt}
        onKeyUp={(e) => handleKeyDown && handleKeyDown(e)}
        onClick={iptHandleClick}
      />
      {
        // 可清除的Ipunt
        (showClear && (
          <CloseOutlined
            style={{ position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' }}
            onClick={() => {
              setIptValue('')
              clearCallback && clearCallback()
            }}
          />
        )) ||
        // 密码框
        (type === "password" && showTogglePwd && (
          <EyeOutlined
            style={{ position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' }}
            onClick={() => setPwdIptState(!pwdIptState)}
          />
        )) ||
        // 数字框
        (type === 'num' && (
          <div className='numTags'>
            <UpOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={addNum} />
            <DownOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={lowNum} />
          </div>
        ))
      }
    </div>
  )
}

export default memo(Input)
