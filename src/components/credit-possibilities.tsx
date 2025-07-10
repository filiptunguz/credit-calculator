import { Card } from '@/components/ui/card.tsx';
import useCreditCapacityCalculation from '@/hooks/use-credit-capacity-calculation.ts';
import { numberWithCommas } from '@/lib/utils.ts';

type CreditPossibilitiesProps = {
	isMortgage: boolean;
};

export default function CreditPossibilities({ isMortgage }: CreditPossibilitiesProps) {
	const { currentDebtPercent, maxCreditPrice, maxCreditRate, maxTotalDebt } =
		useCreditCapacityCalculation(isMortgage);

	return (
		<Card>
			<div className="flex gap-4 justify-between items-center">
				<span>Your salary currently is charged:</span>
				<span>{currentDebtPercent} %</span>
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>Your salary can be charged up to:</span>
				<span>{maxTotalDebt} %</span>
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>You are creditworthy for an monthly installment of:</span>
				<span>€ {numberWithCommas(maxCreditRate)}</span>
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>The maximum loan you can get:</span>
				<span>€ {numberWithCommas(parseInt(maxCreditPrice.toFixed()))}</span>
			</div>
		</Card>
	);
}
