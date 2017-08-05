export function closest(className: string, el: HTMLElement): HTMLElement | null {

    let currentNode = el.parentElement;
    while (currentNode != null) {

        if (currentNode.matches(className)) {
            return currentNode;
        }

        currentNode = currentNode.parentElement;
    }

    return null;
}

export function querySelectorAllByText(selector: string, texts: string[]) : HTMLElement[]{
    const result: HTMLElement[] = [];

    const queryResults = document.querySelectorAll(selector);

    for (var i = 0; i < queryResults.length; i++) {
        const el = <HTMLLinkElement>queryResults[i];
        const linkTxt = el.innerText.toLowerCase();

        if (texts.some((txt) => linkTxt.indexOf(txt.toLowerCase()) !== -1)) {
            result.push(el);
        }
    }

    return result;
}


export function prepend(parentElement: HTMLElement, element: HTMLElement) : void {
    parentElement.insertBefore(element, parentElement.firstChild);
}


export function toggleNodeClasses(nodes: HTMLElement[], className:string, force: boolean): void{
    if(nodes != null){
        for (var index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            node.classList.toggle(className, force);
        }
    }
}