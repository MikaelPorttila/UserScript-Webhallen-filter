import { Subscription } from './../sub';
import { Constants } from './../constants';
import { Memory } from './../memory';
import { prepend } from './../dom';

export class Menu {

    private menuContainer: HTMLElement;
    private menuDiv: HTMLElement;
    private displayMenuOptions: boolean = false;

    constructor(
        private target: string,
        private memory: Memory) {
            this.memory.track<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS, (key, filters) => this.renderMenu(filters));
        }

    public build(): void {

        setTimeout(() => {

            this.menuContainer = <HTMLElement>document.querySelector(<string>this.target);
            this.menuDiv = document.createElement("div");
            this.menuDiv.setAttribute("id", "whusf-menu");
  
            prepend(this.menuContainer, this.menuDiv);

            this.renderMenu(this.memory.get<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS) || []);
        }, 0);
    }

    private toggleFilterMenu(){
        this.displayMenuOptions = !this.displayMenuOptions;
    }

    private addHandlers(){

        const toggleMenuButton = this.menuDiv.querySelector('#whusf-options-toggler');
        if(toggleMenuButton != null){
            toggleMenuButton.addEventListener('click', (e) => {

                this.displayMenuOptions = !this.displayMenuOptions;
                const menu = this.menuDiv.querySelector('#whusf-options');
                if(menu != null){
                    menu.classList.toggle('wbusf-display-none', !this.displayMenuOptions);
                }
                
                e.preventDefault();
                return false;
            });
        }

        const addButton = this.menuDiv.querySelector('#whusf-add-button');
        if(addButton != null){
            addButton.addEventListener('click', () => {
                const newFilter = prompt("Add new Filter");
                if(!!newFilter && newFilter != ""){

                    const filters = this.memory.get<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS);
                    if(filters != null){
                        filters.push(newFilter);
                        this.memory.set(Constants.LOCAL_STORAGE_KEY_FILTERS, filters);
                        this.renderMenu(filters);
                    }
                }
            });
        }

        const deleteLinks = this.menuDiv.querySelectorAll('.whusf-options-filter-delete');
        for (var index = 0; index < deleteLinks.length; index++) {
            const link = deleteLinks[index];
            link.addEventListener('click', (e: Event) => {

                const targetElement = <HTMLElement>e.target;
                const filterName = targetElement.getAttribute('data-filter');
                if(!!filterName && filterName != ""){

                    const filters = this.memory.get<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS);
                    if(filters != null){
                        const filterIndex = filters.indexOf(filterName);
                        if(filterIndex != -1){
                            filters.splice(filterIndex, 1);
                            this.memory.set(Constants.LOCAL_STORAGE_KEY_FILTERS, filters);
                            this.renderMenu(filters);
                        }
                    }
                }

                e.preventDefault();
                return false;
            });
        }

    }

    private renderMenu(filters: string[]){

        let filterList = "";
        
        for (var index = 0; index < filters.length; index++) {
            const filter = filters[index];
            filterList += `<li><a href="#" class="whusf-options-filter-delete" data-filter="${filter}">&#10006;</a>${filter}</li>`;
        }
        
        this.menuDiv.innerHTML = `
                <div>
                    <a href="#" id="whusf-options-toggler">Filter settings (${filters.length} active filters)</a>
                </div>
                <div id="whusf-options" ${ !this.displayMenuOptions ? 'class="wbusf-display-none"' : '' }>
                    <ul>
                        ${filterList}
                    </ul>
                
                    <button id="whusf-add-button" class="button s18 checkout">Add filter</button>
                </div>
            `;
        this.addHandlers();
    }

}