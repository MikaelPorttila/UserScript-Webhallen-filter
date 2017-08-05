// Include custom styles into the script to be injected into web pages.
// Remove this line to reduce script output size if you do not need styles.
import './index.css';

export class FilterScript {

    constructor(){}

    public run(){
        this.getLinksByTexts("global")
            .forEach((el) => {
                const prodItem = this.closestParentByClass('.prod_list_row', <HTMLElement>el);
                if(prodItem != null){
                    (<HTMLElement>prodItem.parentElement).removeChild(prodItem);
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
