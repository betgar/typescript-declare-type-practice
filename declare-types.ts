/**
 * @file declare-types.d.ts
 * @author betgar (betgar@163.com)
 * @date 08/26/2019
 * @time 19:15:12
 * @description 声明文件
 * @copyright junna
 */

 // 变量
 const num: number = 1;
 const str: string = 'str';
 const bool: boolean = true;

 const nulls: null = null;
 const undefine: undefined = undefined;
 const symbols: Symbol = Symbol('symbal');

 // 数组: 推荐使用T[]这种写法
 const nums: number[] = [1, 2, 3, 4];

 // 不推荐：Array<T>泛型写法，因为在JSX中不兼容，所以为了统一都使用T[]这种类型
 const strs: Array<string> = ['s', 't', 'r'];

 const dates: Date[] = [new Date(), new Date()];


 // 数组concat方法的never问题
 // 提示： Type 'string' is not assignable to type 'never'.
//  const strNever: string[] = [].concat(['s']);

 // 主要问题是：[]数组，ts无法根据上下文判断数组内部元素的类型
 // @see https://github.com/Microsoft/TypeScript/issues/10479

 const fixArrNever: string[] = ([] as string[]).concat(['s']);

 // 接口
 interface username {
  first: string;
  second: string;
}

let username: username = {
  first: 'John',
  second: 'Doe'
};

interface ClickHandler {
  (params: string[]): void;
}

const handler: (params: string[]) => void = (ars) => {};

// 特殊类型
const any: any = 'any types'; // typescript的any类型，相当于什么类型都没写
let nobody: any = 'nobody, but you';
nobody = 123;

// tsconfig.json: strictNullChecks: false
let nullNum: number = null;
let undef: string = undefined;

// void
function printUsername (name: string): void {
    console.log(name);
}

// 联合类型
function options(opts: {
  types?: string;
  tag: string | number;
}): void {

}


// 交叉类型
function $extend<T, U>(first: T, second: U): T & U {
  // 示意而已
  return Object.assign(first, second);
}


// 元组类型
let nameNumber: [string, number];

// Ok
nameNumber = ['Jenny', 221345];

// Error
// nameNumber = ['Jenny', '221345'];

let tuple: [string, number];
nameNumber = ['Jenny', 322134];

const [usernameStr, uselessNum] = nameNumber;

// type的使用
type StrOrNum = string | number;

// 使用
let sample: StrOrNum;
sample = 123;
sample = '123';

// 会检查类型
// sample = true; // Error

// 例子： types/axios.d.ts
// declare module 'axios'; // 这里的axios声明为any类型

// 例子：jQuery，现实中jQuery是有.d.ts
declare const jQuery: any;
declare const $: typeof jQuery;


// 看看vue怎么处理的：shims-vue.d.ts
// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

// html
declare module '*.html';
// css
declare module '*.css';


type strOrNumber = string | number;
const phone: strOrNumber = 12312313;


const convertArrType: string[] = <Array<string>>[].concat(['s']);

class Socket {
}

// 函数的声明方式
export type SocketEventHandler = (
  evt: CloseEvent | MessageEvent | Event,
  socket: Socket,
  type: string // 默认值
) => any;

const eventHandler: SocketEventHandler = (evt) => {

}

type Hello = {
  [key: string]: string;
};

const greeting: Hello = {
  hi: 'morning'
}

console.log(greeting['hi'])

interface AxiosOptions {}
type AjaxOptions = {
  axiosOptions: AxiosOptions;
  // 额外扩展的放入到单独的属性节点下
  extraOptions: {
      [prop: string]: any
  };
};


type AjaxOptions1 = {
  axiosOptions?: AxiosOptions;
  // 不要这样写，因为axiosOptions拼写错误时，不会提示
  [prop: string]: any
};

const ajaxOptions: AjaxOptions1 = {
  axiosOptions1: {}
}

