// vdom 仮想DOM
// dom ブラウザのリアルDOM

/**
 * @typedef {{id: string}& {[key: string]: string}} ATTRIVUTE
 * @typedef {{tagName: string, content: string, attributes: ATTRIVUTE, children?: Array<VDOM>}} VDOM
 */

/** 
 * vdomをdomに変換
 *
 * @param {string} tagName 
 * @param {ATTRIVUTE} attributes
 * @param {Array<VDOM>} children
 *
 * @returns VDOM
 */
const genVNode = (tagName, attributes = [], children = []) => ({
  tagName,
  attributes,
  children,
})

const vNode = genVNode("p", { id: "p-1" }, [
  {
    tagName: "text",
    attributes: {
      id: "text-1",
      content: 'hoge'
    }
  }
])

/**
 * ブラウザにdomを描画
 * @param HTMLElement elm
 */
const render = (element) => {
  document.body.appendChild(element)
}

/** 
 * VDOM再帰的にElementに変換していく
 * @param {VDOM} vdom
 */
const convertElement = (vdom) => {
  const element = document.createElement(vdom.tagName)
  for (const key in vNode.attributes) {
    element.setAttribute(key, vNode.attributes[key])
  }

  vdom.children && vdom.children.forEach((child) => {
    if (child.tagName === 'text') {
      element.innerText = child.attributes["content"]
    }
    element.appendChild(convertElement(child))
  })
  return element
}

// main
(() => {
  const realDOM = convertElement(vNode)
  render(realDOM)
})()

