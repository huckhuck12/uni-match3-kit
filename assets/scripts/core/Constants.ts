import { _decorator } from 'cc';

export const Constants = {
    ROWS: 8,            // 行数
    COLS: 8,            // 列数
    TILE_SIZE: 80,      // 方块大小
    TYPE_COUNT: 5,      // 颜色数量
    ANIM_DURATION: 0.2  // 动画时长
};

export enum TileType {
    NONE = -1,
    TYPE_1 = 0, TYPE_2 = 1, TYPE_3 = 2, TYPE_4 = 3, TYPE_5 = 4
}