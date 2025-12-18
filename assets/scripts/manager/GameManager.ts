import { _decorator, Component, Node, input, Input, EventTouch, Vec2 } from 'cc';
import { Match3Logic } from '../core/Match3Logic';
import { Constants } from '../core/Constants';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node)
    gridNode: Node = null!; // 拖入棋盘节点

    private logic: Match3Logic = new Match3Logic();

    start() {
        console.log("Game Started", this.logic.getGrid());
        // TODO: 根据 logic.getGrid() 实例化 Prefab
        this.addInputListeners();
    }

    addInputListeners() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(event: EventTouch) {
        console.log("Touch detected!");
    }
}