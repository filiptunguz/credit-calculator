import { useCreditCapacityContext } from '@/lib/credit-helper.ts';

const MAX_TOTAL_DEBT = 60;
const DEFAULT_TOTAL_DEBT = 55;
const MIDDLE_TOTAL_DEBT = 50;
const MIN_TOTAL_DEBT = 35;
const DEFAULT_DEBT_RESTRICTION_EUR = 510;
const MIDDLE_DEBT_RESTRICTION_EUR = 340;
const MIN_DEBT_RESTRICTION_EUR = 260;

export default function useCreditCapacityCalculation(isMortgage: boolean) {
	const { creditValues } = useCreditCapacityContext();

	const getMaxTotalDebt = () => {
		let maxDebts = MAX_TOTAL_DEBT;
		const salary = creditValues.salary || 0;

		if (salary < MIN_DEBT_RESTRICTION_EUR) maxDebts = MIN_TOTAL_DEBT;
		else if (salary < MIDDLE_DEBT_RESTRICTION_EUR) maxDebts = MIDDLE_TOTAL_DEBT;
		else if (salary < DEFAULT_DEBT_RESTRICTION_EUR) maxDebts = DEFAULT_TOTAL_DEBT;

		return Math.floor(maxDebts);
	};

	const currentDebtPercent = Math.floor(
		(((creditValues.loanRate ?? 0) +
			((creditValues.cardDebts ?? 0) + (creditValues.acceptableMinus ?? 0)) * 0.05) /
			(creditValues.salary ?? 0)) *
			100,
	);

	const maxCreditRate = Math.floor(
		((getMaxTotalDebt() - currentDebtPercent) / 100) * (creditValues.salary ?? 0),
	);

	const calculateMaxCreditPrice = (): number => {
		const nominalRateCalculation = creditValues.nominalRate / 12 / 100;

		return (
			(maxCreditRate / nominalRateCalculation) *
			(1 -
				Math.pow(
					1 + nominalRateCalculation,
					0 - creditValues.paymentPeriod * (isMortgage ? 12 : 1),
				))
		);
	};

	return {
		currentDebtPercent,
		maxTotalDebt: getMaxTotalDebt(),
		maxCreditRate,
		maxCreditPrice: calculateMaxCreditPrice(),
	};
}
