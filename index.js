import
// React,
{
  createElement, Fragment,
  // ReactElement, ReactNode, ReactComponent,
} from 'react';
import classNames from 'classnames';
// import Lodash_flattenDeep from 'lodash/flattenDeep';

// function isReactElement(obj) {
//   return obj.$$typeof === Symbol.for("react.element") && obj.hasOwnProperty("type") && obj.hasOwnProperty("props");
// };


// 支持函数作为children
const convertChildren = (children) => {
  return children.map(child => 
    typeof child === 'function' ? child() : child
  );
}

// eslint-disable-next-line no-unused-vars
const omit = (prop, { [prop]: xx, ...rest }) => rest;

export default function vNode(tag, props, ...children) {
  if (tag==null) {tag = Fragment;}
  if (props?.class!=null) {
    props.className = classNames([props.class, props.className]);
    props = omit('class', props);
  }
  // children = convertChildren(Lodash_flattenDeep([children]));
  children = convertChildren([children].flat(Infinity));
  return createElement(tag, props, ...children);
}
