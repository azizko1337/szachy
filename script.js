let chosedField = null;

class chessboard {
  constructor() {
    this.init();
    document.querySelectorAll(`table td`).forEach((tableElement) => {
      tableElement.addEventListener(`click`, (e) => {
        if (chosedField) {
          console.log(this.board);
          document.getElementById(chosedField).classList.remove("chosed");
          const secondClick = this.board[tableElement.id];
          const firstClick = this.board[chosedField];
          this.board[chosedField] = secondClick;
          this.board[tableElement.id] = firstClick;
          chosedField = null;
          this.render();
        } else {
          if (this.board[tableElement.id]) {
            chosedField = tableElement.id;
            tableElement.classList.add("chosed");
          }
        }
      });
    });
    this.render();
  }
  figures = {
    WIEZA: "wieza",
    KON: "kon",
    GONIEC: "goniec",
    HETMAN: "hetman",
    KROL: "krol",
    PION: "pion",
  };
  board = {
    A8: null,
    B8: null,
    C8: null,
    D8: null,
    E8: null,
    F8: null,
    G8: null,
    H8: null,
    A7: null,
    B7: null,
    C7: null,
    D7: null,
    E7: null,
    F7: null,
    G7: null,
    H7: null,
    A6: null,
    B6: null,
    C6: null,
    D6: null,
    E6: null,
    F6: null,
    G6: null,
    H6: null,
    A5: null,
    B5: null,
    C5: null,
    D5: null,
    E5: null,
    F5: null,
    G5: null,
    H5: null,
    A4: null,
    B4: null,
    C4: null,
    D4: null,
    E4: null,
    F4: null,
    G4: null,
    H4: null,
    A3: null,
    B3: null,
    C3: null,
    D3: null,
    E3: null,
    F3: null,
    G3: null,
    H3: null,
    A2: null,
    B2: null,
    C2: null,
    D2: null,
    E2: null,
    F2: null,
    G2: null,
    H2: null,
    A1: null,
    B1: null,
    C1: null,
    D1: null,
    E1: null,
    F1: null,
    G1: null,
    H1: null,
  };
  init = () => {
    //first row up
    this.board.A8 = this.figures.WIEZA;
    this.board.B8 = this.figures.KON;
    this.board.C8 = this.figures.GONIEC;
    this.board.D8 = this.figures.HETMAN;
    this.board.E8 = this.figures.KROL;
    this.board.F8 = this.figures.GONIEC;
    this.board.G8 = this.figures.KON;
    this.board.H8 = this.figures.WIEZA;
    //second row up
    this.board.A7 = this.figures.PION;
    this.board.B7 = this.figures.PION;
    this.board.C7 = this.figures.PION;
    this.board.D7 = this.figures.PION;
    this.board.E7 = this.figures.PION;
    this.board.F7 = this.figures.PION;
    this.board.G7 = this.figures.PION;
    this.board.H7 = this.figures.PION;
    //first row down
    this.board.A1 = this.figures.WIEZA;
    this.board.B1 = this.figures.KON;
    this.board.C1 = this.figures.GONIEC;
    this.board.D1 = this.figures.HETMAN;
    this.board.E1 = this.figures.KROL;
    this.board.F1 = this.figures.GONIEC;
    this.board.G1 = this.figures.KON;
    this.board.H1 = this.figures.WIEZA;
    //second row down
    this.board.A2 = this.figures.PION;
    this.board.B2 = this.figures.PION;
    this.board.C2 = this.figures.PION;
    this.board.D2 = this.figures.PION;
    this.board.E2 = this.figures.PION;
    this.board.F2 = this.figures.PION;
    this.board.G2 = this.figures.PION;
    this.board.H2 = this.figures.PION;
  };
  render = () => {
    document.querySelectorAll(`table td`).forEach((tableElement) => {
      tableElement.classList.remove(this.figures.WIEZA);
      tableElement.classList.remove(this.figures.KON);
      tableElement.classList.remove(this.figures.GONIEC);
      tableElement.classList.remove(this.figures.HETMAN);
      tableElement.classList.remove(this.figures.KROL);
      tableElement.classList.remove(this.figures.PION);
    });
    document.getElementById("A8").classList.add(this.board.A8);
    document.getElementById("B8").classList.add(this.board.B8);
    document.getElementById("C8").classList.add(this.board.C8);
    document.getElementById("D8").classList.add(this.board.D8);
    document.getElementById("E8").classList.add(this.board.E8);
    document.getElementById("F8").classList.add(this.board.F8);
    document.getElementById("G8").classList.add(this.board.G8);
    document.getElementById("H8").classList.add(this.board.H8);
    document.getElementById("A7").classList.add(this.board.A7);
    document.getElementById("B7").classList.add(this.board.B7);
    document.getElementById("C7").classList.add(this.board.C7);
    document.getElementById("D7").classList.add(this.board.D7);
    document.getElementById("E7").classList.add(this.board.E7);
    document.getElementById("F7").classList.add(this.board.F7);
    document.getElementById("G7").classList.add(this.board.G7);
    document.getElementById("H7").classList.add(this.board.H7);
    document.getElementById("A6").classList.add(this.board.A6);
    document.getElementById("B6").classList.add(this.board.B6);
    document.getElementById("C6").classList.add(this.board.C6);
    document.getElementById("D6").classList.add(this.board.D6);
    document.getElementById("E6").classList.add(this.board.E6);
    document.getElementById("F6").classList.add(this.board.F6);
    document.getElementById("G6").classList.add(this.board.G6);
    document.getElementById("H6").classList.add(this.board.H6);
    document.getElementById("A5").classList.add(this.board.A5);
    document.getElementById("B5").classList.add(this.board.B5);
    document.getElementById("C5").classList.add(this.board.C5);
    document.getElementById("D5").classList.add(this.board.D5);
    document.getElementById("E5").classList.add(this.board.E5);
    document.getElementById("F5").classList.add(this.board.F5);
    document.getElementById("G5").classList.add(this.board.G5);
    document.getElementById("H5").classList.add(this.board.H5);
    document.getElementById("A4").classList.add(this.board.A4);
    document.getElementById("B4").classList.add(this.board.B4);
    document.getElementById("C4").classList.add(this.board.C4);
    document.getElementById("D4").classList.add(this.board.D4);
    document.getElementById("E4").classList.add(this.board.E4);
    document.getElementById("F4").classList.add(this.board.F4);
    document.getElementById("G4").classList.add(this.board.G4);
    document.getElementById("H4").classList.add(this.board.H4);
    document.getElementById("A3").classList.add(this.board.A3);
    document.getElementById("B3").classList.add(this.board.B3);
    document.getElementById("C3").classList.add(this.board.C3);
    document.getElementById("D3").classList.add(this.board.D3);
    document.getElementById("E3").classList.add(this.board.E3);
    document.getElementById("F3").classList.add(this.board.F3);
    document.getElementById("G3").classList.add(this.board.G3);
    document.getElementById("H3").classList.add(this.board.H3);
    document.getElementById("A2").classList.add(this.board.A2);
    document.getElementById("B2").classList.add(this.board.B2);
    document.getElementById("C2").classList.add(this.board.C2);
    document.getElementById("D2").classList.add(this.board.D2);
    document.getElementById("E2").classList.add(this.board.E2);
    document.getElementById("F2").classList.add(this.board.F2);
    document.getElementById("G2").classList.add(this.board.G2);
    document.getElementById("H2").classList.add(this.board.H2);
    document.getElementById("A1").classList.add(this.board.A1);
    document.getElementById("B1").classList.add(this.board.B1);
    document.getElementById("C1").classList.add(this.board.C1);
    document.getElementById("D1").classList.add(this.board.D1);
    document.getElementById("E1").classList.add(this.board.E1);
    document.getElementById("F1").classList.add(this.board.F1);
    document.getElementById("G1").classList.add(this.board.G1);
    document.getElementById("H1").classList.add(this.board.H1);
  };
}

const game = new chessboard();
