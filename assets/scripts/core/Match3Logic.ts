import { Constants } from "./Constants";

export class Match3Logic {
    private _grid: number[][] = [];

    constructor() {
        this.initGrid();
    }

    // 初始化棋盘（防开局三消）
    public initGrid() {
        this._grid = [];
        for (let r = 0; r < Constants.ROWS; r++) {
            let row: number[] = [];
            for (let c = 0; c < Constants.COLS; c++) {
                let type = -1;
                do {
                    type = Math.floor(Math.random() * Constants.TYPE_COUNT);
                } while (
                    (c >= 2 && row[c-1] === type && row[c-2] === type) ||
                    (r >= 2 && this._grid[r-1][c] === type && this._grid[r-2][c] === type)
                );
                row.push(type);
            }
            this._grid.push(row);
        }
    }

    public getGrid() { return this._grid; }

    // 交换方块
    public swap(r1: number, c1: number, r2: number, c2: number) {
        const temp = this._grid[r1][c1];
        this._grid[r1][c1] = this._grid[r2][c2];
        this._grid[r2][c2] = temp;
    }

    // 检查是否有匹配
    public checkMatches(): {r:number, c:number}[] {
        let matchedSet = new Set<string>();
        const grid = this._grid;

        // 横向
        for(let r=0; r<Constants.ROWS; r++){
            for(let c=0; c<Constants.COLS-2; c++){
                let t = grid[r][c];
                if(t === -1) continue;
                if(grid[r][c+1] === t && grid[r][c+2] === t){
                    matchedSet.add(`${r},${c}`); matchedSet.add(`${r},${c+1}`); matchedSet.add(`${r},${c+2}`);
                }
            }
        }
        // 纵向
        for(let c=0; c<Constants.COLS; c++){
            for(let r=0; r<Constants.ROWS-2; r++){
                let t = grid[r][c];
                if(t === -1) continue;
                if(grid[r+1][c] === t && grid[r+2][c] === t){
                    matchedSet.add(`${r},${c}`); matchedSet.add(`${r+1},${c}`); matchedSet.add(`${r+2},${c}`);
                }
            }
        }
        
        return Array.from(matchedSet).map(s => {
            const parts = s.split(',');
            return {r: parseInt(parts[0]), c: parseInt(parts[1])};
        });
    }
}