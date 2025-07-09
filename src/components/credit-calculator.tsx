import { Card } from '@/components/ui/card.tsx';
import {
	type CreditCapacityFields,
	CreditCapacitySchema,
	MAXIMUM_NOMINAL_RATE,
	MINIMUM_SALARY,
} from '@/schemas/credit-capacity.schema.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CreditCalculatorInput from '@/components/credit-calculator-input.tsx';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form.tsx';
import { Slider } from '@/components/ui/slider.tsx';
import { Label } from '@/components/ui/label.tsx';
import { useEffect } from 'react';
import {
	CASH_MAXIMUM_PAYMENT_PERIOD,
	CASH_MINIMUM_PAYMENT_PERIOD,
	getDefaultCreditFormData,
	MORTGAGE_MAXIMUM_PAYMENT_PERIOD,
	MORTGAGE_MINIMUM_PAYMENT_PERIOD,
	useCreditCapacityContext,
} from '@/lib/credit-helper.ts';

type CreditCalculatorProps = {
	isMortgage: boolean;
	isDisabled: boolean;
};

export default function CreditCalculator({ isMortgage, isDisabled }: CreditCalculatorProps) {
	const { setCreditValues } = useCreditCapacityContext();
	const form = useForm<CreditCapacityFields>({
		resolver: zodResolver(CreditCapacitySchema),
		mode: 'onChange', // validate on every change
		defaultValues: getDefaultCreditFormData(isMortgage),
	});

	useEffect(() => {
		if (form) {
			form.setValue(
				'paymentPeriod',
				isMortgage ? MORTGAGE_MAXIMUM_PAYMENT_PERIOD : CASH_MAXIMUM_PAYMENT_PERIOD,
			);
		}
	}, [isMortgage]);

	useEffect(() => {
		const subscription = form.watch((value) => {
			setCreditValues(value as CreditCapacityFields);
		});
		return () => subscription.unsubscribe();
	}, [form]);

	return (
		<Card>
			<Form {...form}>
				<form className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="salary"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<CreditCalculatorInput
										id="salaryInput"
										label="Your salary"
										onValueChange={field.onChange}
										value={field.value}
										min={MINIMUM_SALARY}
										disabled={isDisabled}
										error={form.formState.errors.salary?.message}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="loanRate"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<CreditCalculatorInput
										id="loanRateInput"
										label="Current total loan rates"
										onValueChange={field.onChange}
										value={field.value}
										min={0}
										disabled={isDisabled}
										error={form.formState.errors.loanRate?.message}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="cardDebts"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<CreditCalculatorInput
										id="cardDebtsInput"
										label="Current card depts"
										onValueChange={field.onChange}
										value={field.value}
										min={0}
										disabled={isDisabled}
										error={form.formState.errors.cardDebts?.message}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="acceptableMinus"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<CreditCalculatorInput
										id="acceptableMinusInput"
										label="Acceptable minus"
										onValueChange={field.onChange}
										value={field.value}
										min={0}
										disabled={isDisabled}
										error={form.formState.errors.acceptableMinus?.message}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="paymentPeriod"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="space-y-3">
										<Label>Payment Period:</Label>
										<div className="flex gap-2">
											<Slider
												min={
													isMortgage ? MORTGAGE_MINIMUM_PAYMENT_PERIOD : CASH_MINIMUM_PAYMENT_PERIOD
												}
												max={
													isMortgage ? MORTGAGE_MAXIMUM_PAYMENT_PERIOD : CASH_MAXIMUM_PAYMENT_PERIOD
												}
												value={[field.value]}
												onValueChange={(value) => field.onChange(value[0])}
												step={1}
												disabled={isDisabled}
											/>
											<div className="border-l border-gray-300 pl-2">
												<span className="block w-14 whitespace-nowrap text-center text-sm">
													{field.value} {isMortgage ? 'years' : 'months'}
												</span>
											</div>
										</div>
									</div>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="nominalRate"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<CreditCalculatorInput
										id="acceptableMinusInput"
										label="Nominal Rate"
										symbol="%"
										onValueChange={field.onChange}
										value={field.value}
										min={0}
										max={MAXIMUM_NOMINAL_RATE}
										disabled={isDisabled}
										error={form.formState.errors.nominalRate?.message}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</Card>
	);
}
