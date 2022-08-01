const { ccclass, property } = cc._decorator;
import { AchievementItem } from "./entity/achievementItem";

@ccclass
export default class AchievementItemUI extends cc.Component {
    @property(cc.Label) id: cc.Label = null;

    public init(item: AchievementItem) {
        this.id.string = `${item.id}`;
    }
};
