import {Figure, FigureNames} from "../Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../ChessFigureBlack/BRook.png";
import whiteLogo from "../ChessFigureWhite/WRook.png";

export class Rook extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo=color===Colors.BLACK ? blackLogo:whiteLogo // или черный или белый логотип
        this.name = FigureNames.ROOK;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true;
        return false
    }

}