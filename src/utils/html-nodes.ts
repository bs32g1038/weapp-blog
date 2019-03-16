import { parse } from 'himalaya';

function parseNodes(html, children = null) {
    let data;
    if (children) {
        data = children;
    } else {
        data = parse(html)
    }
    const nodes = data.map(item => {
        if (item.content && item.type) {
            return {
                type: item.type,
                text: item.content
            }
        }
        const attrs: any = {};
        if (item.tagName === 'p') {
            attrs.style = "font-size: 14px; margin: 0px 0px 20px; line-height: 1.5;dispaly:block;"
        } else if (item.tagName === 'img') {
            attrs.style = 'width: 100%'
        } else if (item.tagName === 'ul' || item.tagName === 'li') {
            attrs.style = 'font-size: 14px;dispaly:block;'
        } else if (item.tagName === 'pre' || item.tagName === 'code') {
            item.tagName = 'p';
            attrs.style = "font-size: 14px; margin: 0px 0px 20px; line-height: 1.5;dispaly:block;"
        } else {
            const HTags = ['h1:20', 'h2:18', 'h3:16', 'h4:14', 'h5:12'];
            HTags.map(str => {
                if (str.indexOf(item.tagName) !== -1) {
                    attrs.style = `dispaly:block;font-weight: bold; line-height: 1.5; margin: 20px 0px 15px; font-size: ${str.split(':')[1]}px;`
                }
            })
        }
        for (const ab of item.attributes) {
            if (item.tagName === 'img' && ab.key === 'src') {
                attrs[ab.key] = 'https://www.lizc.me' + ab.value;
                continue;
            }
            attrs[ab.key] = ab.value;
        }
        const rs = parseNodes(null, item.children);
        return {
            name: item.tagName,
            attrs: attrs,
            children: rs
        }
    })
    return nodes;
}

export default parseNodes;