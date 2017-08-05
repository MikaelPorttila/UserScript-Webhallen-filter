import { Constants } from './constants';
import { Filter } from './filter';
import { Menu } from './components/menu';
import { Memory } from './memory';
export class App {

    private memory: Memory;
    private menu: Menu;
    private filter: Filter;

    constructor(){
        this.memory = new Memory();
        this.initialMemorySetup();
        this.menu = new Menu(Constants.WH_VAR_MENU_CONTAINER_SELECTOR, this.memory);
        this.filter = new Filter(this.memory);
    }

    private initialMemorySetup(){
        
        const filters = this.memory.get<{}>(Constants.LOCAL_STORAGE_KEY_FILTERS);
        if (filters == null) {
            this.memory.set(Constants.LOCAL_STORAGE_KEY_FILTERS, ["global", "spinner"]);
        }
    }

    public init(): void  {
        this.filter.execute();
        this.menu.build();
    }
}