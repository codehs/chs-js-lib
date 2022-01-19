import Grid from '../src/datastructures/grid.js';

describe('Grid', () => {
    describe('the constructor', () => {
        it('Errors for != 2 arguments', () => {
            expect(() => {
                new Grid();
            }).toThrow();
            expect(() => {
                new Grid(1);
            }).toThrow();
            expect(() => {
                new Grid(1, 2, 3);
            }).toThrow();
        });
        it('Errors for non-numeric arguments', () => {
            expect(() => {
                new Grid('one', 1);
            }).toThrow();
            expect(() => {
                new Grid(1, 'one');
            }).toThrow();
        });
        it('Initializes a 2dimensional grid of size rows * cols', () => {
            const g = new Grid(3, 5);
            const grid = g.grid;
            expect(grid.length).toEqual(3);
            grid.forEach(row => {
                expect(row.length).toEqual(5);
            });
        });
    });
    describe('initFromArray', () => {
        it('Errors for != 1 array arg', () => {
            const g = new Grid(1, 1);
            expect(() => {
                g.initFromArray();
            }).toThrow();
            expect(() => {
                g.initFromArray(1, 2);
            }).toThrow();
            expect(() => {
                g.initFromArray(1);
            }).toThrow();
        });
        it('Fills the values of the Grid', () => {
            const g = new Grid(3, 3);
            g.initFromArray([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
            ]);
            expect(g.grid[0]).toEqual([1, 2, 3]);
            expect(g.grid[1]).toEqual([5, 6, 7]);
            expect(g.grid[2]).toEqual([9, 10, 11]);
        });
    });
    describe('init', () => {
        it('Errors for != finite or non-numeric arg', () => {
            expect(() => {
                new Grid(1, 1).init();
            }).toThrow();
            expect(() => {
                new Grid(1, 1).init(Infinity);
            }).toThrow();
            expect(() => {
                new Grid(1, 1).init(0);
            }).not.toThrow();
            expect(() => {
                new Grid(1, 1).init(1, 2);
            }).toThrow();
        });
        it('Fills the grid', () => {
            const g = new Grid(2, 2);
            g.init('test');
            g.grid.forEach(row => {
                expect(row).toEqual(['test', 'test']);
            });
        });
    });
    describe('get', () => {
        it('Errors from != 2 finite numeric args', () => {
            const g = new Grid(2, 2);
            expect(() => {
                g.get(Infinity, 0);
            }).toThrow();
            expect(() => {
                g.get(0, Infinity);
            }).toThrow();
            expect(() => {
                g.get('one', 'two');
            }).toThrow();
        });
        it('Extracts an element, allowing OOB', () => {
            const g = new Grid(2, 2);
            expect(g.get(0, 0)).toEqual(undefined);
            g.init(0);
            expect(g.get(0, 0)).toEqual(0);
            expect(() => {
                g.get(10, 10);
            }).toThrow();
        });
    });
    describe('set', () => {
        it('Errors for invalid indices or <3 args', () => {
            const g = new Grid(2, 2);
            expect(() => {
                g.set(Infinity, Infinity, 1);
            }).toThrow();
            expect(() => {
                g.set(1);
            }).toThrow();
            expect(() => {
                g.set(1, 1);
            }).toThrow();
            expect(() => {
                g.set(1, 'one', 1);
            }).toThrow();
            expect(() => {
                g.set(1, 1, 1);
            }).not.toThrow();
        });
        it('Modifies the grid', () => {
            const g = new Grid(1, 1).init(0);
            expect(g.get(0, 0)).toEqual(0);
            g.set(0, 0, 9);
            expect(g.get(0, 0)).toEqual(9);
        });
    });
    describe('toList', () => {
        it('Outputs in a 2dimensional array of [[row, col, val]...]', () => {
            const g = new Grid(2, 2);
            g.initFromArray([
                [0, 1],
                [2, 3],
            ]);
            expect(g.toList()).toEqual([
                [0, 0, 0],
                [0, 1, 1],
                [1, 0, 2],
                [1, 1, 3],
            ]);
        });
    });
    describe('toString', () => {
        it('Formats everything properly', () => {
            expect(
                new Grid(3, 3)
                    .initFromArray([
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                    ])
                    .toString()
            ).toEqual('1 2 3 \n4 5 6 \n7 8 9 \n');
        });
    });
});
