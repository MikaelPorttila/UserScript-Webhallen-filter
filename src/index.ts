export class FilterScript {

    constructor(){}

    public run(){
        this.removeLinks();
    }

    private removeLinks(){
        this.getLinksByTexts("global").forEach((element: HTMLElement) => {

            const prodItem = this.closestParentByClass('.prod_list_row', element);
            if (prodItem != null && prodItem.parentElement != null) {
                prodItem.parentElement.removeChild(prodItem);
            }
        });
    }

    private getLinksByTexts(...texts: string[]) {

        const result: Element[] = [];
        const queryResults = document.querySelectorAll('.prod_list_row a');
        
        for (var i = 0; i < queryResults.length; i++){
            const el = <HTMLLinkElement>queryResults[i];
            const linkTxt = el.innerText.toLowerCase();

            if (texts.some((txt) => linkTxt.indexOf(txt.toLowerCase()) !== -1)){
                result.push(el);
            }
        }
        
        return result;
    }   

    private closestParentByClass(className: string, el: HTMLElement): HTMLElement | null {

        let currentNode = el.parentElement;
        while (currentNode != null){

            if (currentNode.matches(className)){
                return currentNode;
            }

            currentNode = currentNode.parentElement;
        }

        return null;
    } 
}

const runtime = new FilterScript();
window.addEventListener('load', () => runtime.run(), false);
