import { Card } from '@/components/ui/card.tsx';
import { useCreditCapacityContext } from '@/lib/credit-helper.ts';

export default function CreditPossibilities() {
	const { creditValues } = useCreditCapacityContext();

	return (
		<Card>
			<pre>{JSON.stringify(creditValues, null, 2)}</pre>
		</Card>
	);
}
