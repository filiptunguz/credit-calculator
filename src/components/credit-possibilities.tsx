import { Card } from '@/components/ui/card.tsx';
import useCreditCapacityCalculation from '@/hooks/use-credit-capacity-calculation.ts';
import { numberWithCommas } from '@/lib/utils.ts';

type CreditPossibilitiesProps = {
	isMortgage: boolean;
	isDisabled: boolean;
};

export default function CreditPossibilities({ isDisabled, isMortgage }: CreditPossibilitiesProps) {
	const { currentDebtPercent, maxCreditPrice, maxCreditRate, maxTotalDebt } =
		useCreditCapacityCalculation(isMortgage);

	return (
		<Card>
			<div className="flex gap-4 justify-between items-center">
				<span>Your salary currently is charged:</span>
				{!isDisabled && (
					<span className={maxTotalDebt < currentDebtPercent ? 'text-destructive' : ''}>
						{currentDebtPercent} %
					</span>
				)}
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>Your salary can be charged up to:</span>
				{!isDisabled && (
					<span className={maxTotalDebt < currentDebtPercent ? 'text-destructive' : ''}>
						{maxTotalDebt} %
					</span>
				)}
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>You are creditworthy for an monthly installment of:</span>
				{!isDisabled && (
					<span className={maxCreditRate <= 0 ? 'text-destructive' : ''}>
						{maxCreditRate > 0 ? `€ ${numberWithCommas(maxCreditRate)}` : 'Not creditworthy'}
					</span>
				)}
			</div>
			<div className="flex gap-4 justify-between items-center">
				<span>The maximum loan you can get:</span>
				<span className={maxCreditPrice <= 0 ? 'text-destructive' : ''}>
					{maxCreditPrice > 0
						? `€ ${numberWithCommas(parseInt(maxCreditPrice.toFixed()))}`
						: 'Not creditworthy'}
				</span>
			</div>
		</Card>
	);
}
