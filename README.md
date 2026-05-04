# ChessIntelligence

## Simple explanation

This is going to be a simple website where a user can learn about the
significance of specific chess moves, explained by their AI model of choice.
More to come, as things are just getting started now.

## Move classifications

- $\color{#19d4af}\text{(!!) Brilliant: a special move that involves a non-obvious piece sacrifice advantage}^1$
- $\color{#3894eb}\text{(!) Perfect: the only good move (other moves are considered mistakes or worse)}$
- $\color{#22ac38}\text{(🜲) Best: the best move possible}$
- $\color{#22ac38}\text{(✓✓) Excellent: advantage loss ≤ 2\\%}$
- $\color{#74b038}\text{(✓) Okay: 2\\% < advantage loss ≤ 5\\%}$
- $\color{#f2be1f}\text{(?!) Inaccuracy: 5\\% < advantage loss ≤ 10\\%}$
- $\color{#e69f00}\text{(?) Mistake: 10\\% < advantage loss ≤ 20\\%}$
- $\color{#df5353}\text{(??) Blunder: advantage loss > 20\\%}$
- $\color{#dbac86}\text{(📖) Opening: a defined opening move}$
- $\color{#dbac86}\text{(→) Forced: the only possible move}$

_Keep in mind that the moves best, excellent, okay, inaccuracy, mistake, and blunder are mathematically calculated with respect to an advantage loss._

$\color{#19d4af}^1\text{Likely incomplete definition and not likely to be implemented anytime soon.}$

## Credits

Move classification colour scheme and rating levels: [Chesskit](https://github.com/GuillaumeSD/Chesskit).
