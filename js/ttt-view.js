class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    $square.addClass(`${this.game.currentPlayer}`);
    $square.text(`${this.game.currentPlayer}`);
    this.game.playMove($square.data("pos"));
    if (this.game.winner()) {
      $("h2").text(`${this.game.winner()} wins!`);
    } else if (this.game.isOver()) {
      $("h2").text("Cats Game!");
    }
  }

  setupBoard() {
    this.$el.append('<ul>');
    for (let i = 0; i < 9; i++) {
      let $li = $("<li>");
      $li.data("pos",[Math.floor(i / 3), i % 3]).appendTo('.ttt ul');
    }
  }
}

module.exports = View;
