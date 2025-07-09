import { Card } from '@/components/ui/card.tsx';
import {
	type CreditCapacityFields,
	CreditCapacitySchema,
	MINIMUM_SALARY,
} from '@/schemas/credit-capacity.schema.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const MORTGAGE_MINIMUM_PAYMENT_PERIOD = 7;
const CASH_MINIMUM_PAYMENT_PERIOD = 8;
const MORTGAGE_MAXIMUM_PAYMENT_PERIOD = 30;
const CASH_MAXIMUM_PAYMENT_PERIOD = 71;

type CreditCalculatorProps = {
	isMortgage: boolean;
	isDisabled: boolean;
};

export default function CreditCalculator({ isMortgage, isDisabled }: CreditCalculatorProps) {
	const form = useForm<CreditCapacityFields>({
		resolver: zodResolver(CreditCapacitySchema),
		defaultValues: {
			salary: MINIMUM_SALARY,
			loanRate: 0,
			cardDebts: 0,
			acceptableMinus: 0,
			paymentPeriod: isMortgage ? MORTGAGE_MINIMUM_PAYMENT_PERIOD : CASH_MINIMUM_PAYMENT_PERIOD,
		},
	});

	// €
	return <Card></Card>;
}
