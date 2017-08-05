import { Memory } from './memory';
import { Constants } from './constants';
import { 
    closest, 
    querySelectorAllByText, 
    toggleNodeClasses
} from './dom';

export class Filter {

    private hideCount: number = 0; 
    
    constructor(private memory: Memory) {
        this.memory.track<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS, (key, filters) => this.filterContent(filters));
    }

    public execute() {
        const filters = this.memory.get<string[]>(Constants.LOCAL_STORAGE_KEY_FILTERS);
        this.filterContent(filters);      
    }

    private filterContent(filters: string[] | null) {

        // Remove existing filters
        const filteredRows = document.querySelectorAll('.prod_list_row.wbusf-display-none');
        for (var index = 0; index < filteredRows.length; index++) {
            filteredRows[index].classList.toggle('wbusf-display-none', false);
        }

        // Apply new filter
        if(filters != null){
            const rows = <HTMLElement[]>querySelectorAllByText('.prod_list_row a', filters).map(row => closest('.prod_list_row', row));
            toggleNodeClasses(rows, 'wbusf-display-none', true);
        }
    }

}