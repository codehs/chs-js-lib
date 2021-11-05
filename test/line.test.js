import Graphics from '../src/graphics/index.js';
import Line from '../src/graphics/line.js';

describe('Line', () => {
    describe('The line constructor', () => {
        it('Errors for fewer or greater than 4 arguments', () => {
            expect(() => {
                new Line();
            }).toThrow(Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.'));
            expect(() => {
                new Line(0);
            }).toThrow(Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.'));
            expect(() => {
                new Line(0, 1);
            }).toThrow(Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.'));
            expect(() => {
                new Line(0, 1, 2);
            }).toThrow(Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.'));
            expect(() => {
                new Line(0, 1, 2, 3, 4);
            }).toThrow(Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.'));
        });
        it('Errors for non-numeric arguments', () => {
            expect(() => {
                new Line(Infinity, 0, 0, 0);
            }).toThrow(
                Error(
                    'One or more of the values you passed to `new Line(x1, y1, x2, y2)` is an illegal number. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('Defaults to lineWidth: 2', () => {
            expect(new Line(1, 2, 3, 4).lineWidth).toEqual(2);
        });
        it('Parses arguments as x, y, x, y', () => {
            const line = new Line(1, 2, 3, 4);
            expect(line.x1).toEqual(1);
            expect(line.y1).toEqual(2);
            expect(line.x2).toEqual(3);
            expect(line.y2).toEqual(4);
        });
        it('Creates a line with .type', () => {
            expect(new Line(0, 0, 0, 0).type).toEqual('Line');
        });
    });

    describe('setColor and getColor', () => {
        it('Errors for invalid calls', () => {
            const line = new Line(1, 2, 3, 4);
            expect(() => {
                line.setColor(undefined);
            }).toThrow(Error('Invalid color'));
            expect(() => {
                line.setColor(1, 2);
            }).toThrow(Error('You should pass exactly 1 argument to `setColor(color)`.'));
        });
        it('Sets the .stroke of the line', () => {
            const line = new Line(1, 2, 3, 4);
            line.setColor('red');
            expect(line.getColor()).toEqual('red');
            expect(line.stroke).toEqual('red');
        });
    });

    describe('Drawing', () => {
        it('Applies the appropriate strokeStyle', () => {
            const g = new Graphics();
            const line = new Line(1, 2, 3, 4);
            line.setColor('blue');
            line.setBorderColor('red');
            const fillStyleSpy = spyOnProperty(
                g.getContext(),
                'fillStyle',
                'set'
            ).and.callThrough();
            const strokeStyleSpy = spyOnProperty(
                g.getContext(),
                'strokeStyle',
                'set'
            ).and.callThrough();
            line.draw(g);
            expect(fillStyleSpy).toHaveBeenCalledOnceWith('#000000');
            expect(strokeStyleSpy).toHaveBeenCalledOnceWith('red');
        });
        it('Invokes stroke', () => {
            const g = new Graphics();
            const line = new Line(1, 2, 3, 4);
            const strokeSpy = spyOn(g.getContext(), 'stroke').and.callThrough();
            line.draw(g);
            expect(strokeSpy).toHaveBeenCalledTimes(1);
        });
        it('Applies the appropriate lineWidth', () => {
            const g = new Graphics();
            const line = new Line(1, 2, 3, 4);
            line.setLineWidth(111);
            const lineWidthSpy = spyOnProperty(
                g.getContext(),
                'lineWidth',
                'set'
            ).and.callThrough();
            line.draw(g);
            expect(lineWidthSpy).toHaveBeenCalledOnceWith(111);
        });
        it('Applies the appropriate rotation around the midpoint', () => {
            const g = new Graphics();
            const line = new Line(0, 0, 200, 200);
            line.setRotation(-90);
            const moveToSpy = spyOn(g.getContext(), 'moveTo').and.callThrough();
            const lineToSpy = spyOn(g.getContext(), 'lineTo').and.callThrough();
            line.draw(g);
            expect(moveToSpy).toHaveBeenCalledOnceWith(0, 200);
            expect(lineToSpy).toHaveBeenCalledOnceWith(200, 0);
        });
    });
    describe('containsPoint', () => {
        it('Returns true for points along the line', () => {
            const start = [50, 75];
            const end = [120, 150];
            const m = (end[1] - start[1]) / (end[0] - start[0]);
            const l = new Line(...start, ...end);
            const b = start[1] - m * start[0];
            for (let x = start[0]; x < end[0]; x += 5) {
                const y = m * x + b;
                expect(l.containsPoint(x, y)).toBeTrue();
            }
        });
        it('Returns false for points along the line outside of lineWidth', () => {
            const start = [50, 75];
            const end = [120, 150];
            const l = new Line(...start, ...end);
            const outsideLine = new Line(start[0], start[1] + 3, end[0], end[1] + 3);
            const m = (outsideLine.y2 - outsideLine.y1) / (outsideLine.x2 - outsideLine.x1);
            const b = outsideLine.y1 - m * outsideLine.x1;
            for (let x = outsideLine.x1; x <= outsideLine.x2; x += 5) {
                const y = m * x + b;
                expect(l.containsPoint(x, y)).toBeFalse();
            }
        });
        it('Returns false for points along the line within of lineWidth', () => {
            const start = [50, 75];
            const end = [120, 150];
            const l = new Line(...start, ...end);
            const outsideLine = new Line(start[0], start[1] + 0.1, end[0], end[1] + 0.1);
            const m = (outsideLine.y2 - outsideLine.y1) / (outsideLine.x2 - outsideLine.x1);
            const b = outsideLine.y1 - m * outsideLine.x1;
            for (let x = outsideLine.x1; x < outsideLine.x2; x += 5) {
                const y = m * x + b;
                expect(l.containsPoint(x, y)).toBeTrue();
            }
        });
    });
});
