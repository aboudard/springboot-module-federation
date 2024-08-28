import { CounterState } from './counter.reducer';
import { getCount } from './counter.selectors';

describe('Counter Selectors', () => {
	it('should select the count', () => {
		const mockState: CounterState = {
			count: 42
		};
		const result = getCount.projector(mockState);
		expect(result).toBe(42);
	});
});